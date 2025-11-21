// Get movie ID from URL
const urlParams = new URLSearchParams(window.location.search);
const movieId = urlParams.get('id');

if (!movieId || !moviesDB[movieId]) {
    alert('Movie not found!');
    window.location.href = 'index.html';
}

const movie = moviesDB[movieId];

// Load movie info
document.getElementById('movieTitle').textContent = movie.title;
document.getElementById('movieRating').innerHTML = `⭐ ${movie.rating}`;
document.getElementById('movieYear').textContent = movie.year;
document.getElementById('movieDuration').textContent = movie.duration;
document.getElementById('movieGenre').textContent = movie.genre;
document.getElementById('movieDescription').textContent = movie.description;
document.getElementById('moviePoster').src = movie.poster;

// Video Player Setup
const video = document.getElementById('videoPlayer');
const playPauseBtn = document.getElementById('playPauseBtn');
const rewindBtn = document.getElementById('rewindBtn');
const forwardBtn = document.getElementById('forwardBtn');
const progressBar = document.getElementById('progressBar');
const progressFilled = document.getElementById('progressFilled');
const currentTimeDisplay = document.getElementById('currentTime');
const durationDisplay = document.getElementById('duration');
const muteBtn = document.getElementById('muteBtn');
const volumeSlider = document.getElementById('volumeSlider');
const speedControl = document.getElementById('speedControl');
const pipBtn = document.getElementById('pipBtn');
const fullscreenBtn = document.getElementById('fullscreenBtn');

// Set video poster
video.poster = movie.poster;

// Check if it's a Google Drive link
if (movie.videoUrl.includes('drive.google.com')) {
    // For Google Drive, we need to use iframe embed
    const videoContainer = video.parentElement;
    const driveIframe = document.createElement('iframe');
    driveIframe.src = movie.videoUrl;
    driveIframe.style.width = '100%';
    driveIframe.style.height = '100%';
    driveIframe.style.border = 'none';
    driveIframe.allow = 'autoplay';
    driveIframe.allowFullscreen = true;
    
    // Replace video element with iframe
    video.style.display = 'none';
    videoContainer.appendChild(driveIframe);
    
    // Hide custom controls for Google Drive (it has its own controls)
    document.querySelector('.player-controls').style.display = 'none';
} else {
    // Use movie's actual video URL from database for regular videos
    video.src = movie.videoUrl;
}

// Load saved progress
const history = getWatchHistory();
const savedProgress = history.find(item => item.id === movieId);
if (savedProgress && savedProgress.progress > 0) {
    video.addEventListener('loadedmetadata', () => {
        video.currentTime = (savedProgress.progress / 100) * video.duration;
    });
}

// Play/Pause
playPauseBtn.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        playPauseBtn.textContent = '⏸';
    } else {
        video.pause();
        playPauseBtn.textContent = '▶';
    }
});

video.addEventListener('click', () => {
    playPauseBtn.click();
});

// Rewind 10 seconds
rewindBtn.addEventListener('click', () => {
    video.currentTime = Math.max(0, video.currentTime - 10);
});

// Forward 10 seconds
forwardBtn.addEventListener('click', () => {
    video.currentTime = Math.min(video.duration, video.currentTime + 10);
});

// Progress Bar
video.addEventListener('timeupdate', () => {
    const progress = (video.currentTime / video.duration) * 100;
    progressFilled.style.width = progress + '%';
    currentTimeDisplay.textContent = formatTime(video.currentTime);
    
    // Save progress every 5 seconds
    if (Math.floor(video.currentTime) % 5 === 0) {
        addToWatchHistory(movieId, progress);
    }
});

video.addEventListener('loadedmetadata', () => {
    durationDisplay.textContent = formatTime(video.duration);
});

progressBar.addEventListener('click', (e) => {
    const rect = progressBar.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    video.currentTime = pos * video.duration;
});

// Volume Control
volumeSlider.addEventListener('input', (e) => {
    video.volume = e.target.value / 100;
    updateVolumeIcon();
});

muteBtn.addEventListener('click', () => {
    video.muted = !video.muted;
    updateVolumeIcon();
});

function updateVolumeIcon() {
    if (video.muted || video.volume === 0) {
        muteBtn.textContent = '🔇';
    } else if (video.volume < 0.5) {
        muteBtn.textContent = '🔉';
    } else {
        muteBtn.textContent = '🔊';
    }
}

// Playback Speed
speedControl.addEventListener('change', (e) => {
    video.playbackRate = parseFloat(e.target.value);
});

// Picture-in-Picture
pipBtn.addEventListener('click', async () => {
    try {
        if (document.pictureInPictureElement) {
            await document.exitPictureInPicture();
        } else {
            await video.requestPictureInPicture();
        }
    } catch (error) {
        console.log('PiP not supported');
    }
});

// Fullscreen
fullscreenBtn.addEventListener('click', () => {
    const playerWrapper = document.querySelector('.player-wrapper');
    if (!document.fullscreenElement) {
        playerWrapper.requestFullscreen();
        fullscreenBtn.textContent = '⛶';
    } else {
        document.exitFullscreen();
        fullscreenBtn.textContent = '⛶';
    }
});

// Keyboard Shortcuts
document.addEventListener('keydown', (e) => {
    switch(e.key) {
        case ' ':
            e.preventDefault();
            playPauseBtn.click();
            break;
        case 'ArrowLeft':
            rewindBtn.click();
            break;
        case 'ArrowRight':
            forwardBtn.click();
            break;
        case 'ArrowUp':
            e.preventDefault();
            video.volume = Math.min(1, video.volume + 0.1);
            volumeSlider.value = video.volume * 100;
            updateVolumeIcon();
            break;
        case 'ArrowDown':
            e.preventDefault();
            video.volume = Math.max(0, video.volume - 0.1);
            volumeSlider.value = video.volume * 100;
            updateVolumeIcon();
            break;
        case 'f':
            fullscreenBtn.click();
            break;
        case 'm':
            muteBtn.click();
            break;
    }
});

// Format time helper
function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

// Auto-hide controls
let controlsTimeout;
const playerWrapper = document.querySelector('.player-wrapper');
const controls = document.querySelector('.player-controls');

playerWrapper.addEventListener('mousemove', () => {
    controls.style.opacity = '1';
    clearTimeout(controlsTimeout);
    controlsTimeout = setTimeout(() => {
        if (!video.paused) {
            controls.style.opacity = '0';
        }
    }, 3000);
});

// Save final progress on page unload
window.addEventListener('beforeunload', () => {
    const progress = (video.currentTime / video.duration) * 100;
    addToWatchHistory(movieId, progress);
});
