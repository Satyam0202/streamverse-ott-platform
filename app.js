// Sample Movie Database
const moviesDB = {
    'dark-knight': {
        id: 'dark-knight',
        title: 'The Dark Knight',
        year: 2008,
        rating: 9.0,
        duration: '2h 32m',
        genre: 'Action, Crime, Drama',
        description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests.',
        poster: 'https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=400',
        trailer: 'https://www.youtube.com/embed/EXeTwQWrcwY',
        videoUrl: 'sample-video-url',
        category: 'action'
    },
    'dude-2025': {
        id: 'dude-2025',
        title: 'Dude',
        year: 2025,
        rating: 8.2,
        duration: '2h 19m',
        genre: 'Romance, Drama',
        description: 'Childhood friends Agan and Kural run an event-planning business and share a warm, close bond. When Kural falls in love with someone else, things get complicated — especially because Kural\'s father, a powerful minister, has deep issues of caste and honour. A heartfelt Tamil romance exploring friendship, love, and social dynamics.',
        poster: 'https://tse2.mm.bing.net/th?id=OIP.XHkKs4_xJL3VBA4SclHo6AHaJP&pid=Api',
        trailer: 'https://www.youtube.com/embed/BBEr-Yh5CxQ',
        videoUrl: 'https://drive.google.com/file/d/1EBrTD5nxzkDLjaO-3vuK0VBTdbHfYhe7/preview',
        category: 'drama',
        cast: 'Pradeep Ranganathan, Mamitha Baiju, R. Sarathkumar',
        director: 'Keerthiswaran',
        music: 'Sai Abhyankkar',
        budget: '₹35 crore',
        boxOffice: '₹100 crore',
        language: 'Tamil'
    }
};

// Local Storage Functions
function getWatchHistory() {
    return JSON.parse(localStorage.getItem('watchHistory') || '[]');
}

function addToWatchHistory(movieId, progress = 0) {
    let history = getWatchHistory();
    const existing = history.findIndex(item => item.id === movieId);
    
    if (existing !== -1) {
        history[existing].progress = progress;
        history[existing].lastWatched = new Date().toISOString();
    } else {
        history.unshift({
            id: movieId,
            progress: progress,
            lastWatched: new Date().toISOString()
        });
    }
    
    localStorage.setItem('watchHistory', JSON.stringify(history));
}

function getMyList() {
    return JSON.parse(localStorage.getItem('myList') || '[]');
}

function addToMyList(movieId) {
    let myList = getMyList();
    if (!myList.includes(movieId)) {
        myList.push(movieId);
        localStorage.setItem('myList', JSON.stringify(myList));
        alert('Added to My List!');
    }
}

// Render Movie Cards
function renderMovieCard(movie, showProgress = false) {
    const history = getWatchHistory();
    const watchData = history.find(item => item.id === movie.id);
    const progress = watchData ? watchData.progress : 0;
    
    return `
        <div class="movie-card" onclick="showMovieModal('${movie.id}')">
            <img src="${movie.poster}" alt="${movie.title}">
            ${showProgress && progress > 0 ? `<div class="continue-progress" style="width: ${progress}%"></div>` : ''}
            <div class="movie-card-overlay">
                <div class="movie-card-title">${movie.title}</div>
                <div class="movie-card-meta">
                    <span>⭐ ${movie.rating}</span>
                    <span>${movie.year}</span>
                    <span>${movie.duration}</span>
                </div>
                <div class="movie-card-actions">
                    <button class="card-btn card-btn-play" onclick="event.stopPropagation(); playMovie('${movie.id}')">▶ Play</button>
                    <button class="card-btn card-btn-info" onclick="event.stopPropagation(); showMovieModal('${movie.id}')">ℹ Info</button>
                </div>
            </div>
        </div>
    `;
}

// Load Movies by Category
function loadMoviesByCategory(category, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    const movies = Object.values(moviesDB).filter(m => m.category === category);
    container.innerHTML = movies.map(m => renderMovieCard(m)).join('');
}

// Load Continue Watching
function loadContinueWatching() {
    const container = document.getElementById('continueWatching');
    if (!container) return;
    
    const history = getWatchHistory();
    if (history.length === 0) {
        container.innerHTML = '<p style="color: #666; padding: 20px;">No movies in progress</p>';
        return;
    }
    
    const movies = history
        .filter(item => item.progress > 0 && item.progress < 95)
        .map(item => moviesDB[item.id])
        .filter(m => m);
    
    container.innerHTML = movies.map(m => renderMovieCard(m, true)).join('');
}

// Load Trending
function loadTrending() {
    const container = document.getElementById('trendingMovies');
    if (!container) return;
    
    const trending = Object.values(moviesDB)
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 6);
    
    container.innerHTML = trending.map(m => renderMovieCard(m)).join('');
}

// Show Movie Modal
function showMovieModal(movieId) {
    const movie = moviesDB[movieId];
    if (!movie) return;
    
    const modal = document.getElementById('movieModal');
    const modalBody = document.getElementById('modalBody');
    
    modalBody.innerHTML = `
        <img src="${movie.poster}" style="width: 100%; border-radius: 20px; margin-bottom: 20px;">
        <h2 style="font-size: 36px; margin-bottom: 15px;">${movie.title}</h2>
        <div style="display: flex; gap: 15px; margin-bottom: 20px; color: #aaa;">
            <span style="color: #ffd700;">⭐ ${movie.rating}</span>
            <span>${movie.year}</span>
            <span>${movie.duration}</span>
        </div>
        <div style="margin-bottom: 20px;">
            <span style="background: rgba(255,0,110,0.2); padding: 5px 15px; border-radius: 15px; font-size: 14px;">${movie.genre}</span>
        </div>
        <p style="font-size: 18px; line-height: 1.8; margin-bottom: 30px; color: #ddd;">${movie.description}</p>
        <div style="display: flex; gap: 15px;">
            <button class="btn-play" onclick="playMovie('${movie.id}')">▶ Play Now</button>
            <button class="btn-trailer" onclick="playTrailer('${movie.id}')">🎬 Trailer</button>
            <button class="btn-info" onclick="addToMyList('${movie.id}')">+ My List</button>
        </div>
    `;
    
    modal.classList.add('active');
}

function closeModal() {
    document.getElementById('movieModal').classList.remove('active');
}

// Play Movie
function playMovie(movieId) {
    addToWatchHistory(movieId, 0);
    window.location.href = `watch.html?id=${movieId}`;
}

// Play Trailer
function playTrailer(movieId) {
    const movie = moviesDB[movieId];
    if (!movie) return;
    
    const modal = document.getElementById('trailerModal');
    const container = document.getElementById('trailerContainer');
    
    container.innerHTML = `<iframe src="${movie.trailer}?autoplay=1" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
    modal.classList.add('active');
}

function closeTrailerModal() {
    const modal = document.getElementById('trailerModal');
    const container = document.getElementById('trailerContainer');
    container.innerHTML = '';
    modal.classList.remove('active');
}

// Quick Search with Secret Admin Code
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('quickSearch');
    const adminBtn = document.getElementById('adminBtn');
    
    if (searchInput) {
        // Use keypress event for Enter key
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                const query = e.target.value.trim();
                
                // Secret code to unlock admin panel
                if (query === '0202') {
                    if (adminBtn) {
                        adminBtn.style.display = 'block';
                        sessionStorage.setItem('adminUnlocked', 'true');
                    }
                    searchInput.value = '';
                    alert('🔓 Admin Panel Unlocked!');
                    return;
                }
                
                // Normal search
                if (query.length > 0) {
                    window.location.href = `search.html?q=${encodeURIComponent(query)}`;
                }
            }
        });
    }
    
    // Check if admin was previously unlocked (session only)
    if (adminBtn && sessionStorage.getItem('adminUnlocked') === 'true') {
        adminBtn.style.display = 'block';
    }
    
    // Load content
    loadContinueWatching();
    loadTrending();
    loadMoviesByCategory('action', 'actionMovies');
    loadMoviesByCategory('drama', 'dramaMovies');
    loadMoviesByCategory('scifi', 'scifiMovies');
    loadMoviesByCategory('comedy', 'comedyMovies');
    loadMoviesByCategory('horror', 'horrorMovies');
    
    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});

// Export for other pages
if (typeof window !== 'undefined') {
    window.moviesDB = moviesDB;
    window.getWatchHistory = getWatchHistory;
    window.addToWatchHistory = addToWatchHistory;
    window.getMyList = getMyList;
    window.addToMyList = addToMyList;
}
