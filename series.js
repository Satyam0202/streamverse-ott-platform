// TV Series Database with Episodes
const seriesDB = {
    'stranger-things': {
        id: 'stranger-things',
        title: 'Stranger Things',
        year: 2016,
        rating: 8.7,
        genre: 'Sci-Fi, Horror, Drama',
        description: 'Stranger Things follows the disappearance of a young boy in Hawkins, Indiana, leading his friends and family into a web of government conspiracies, secret experiments, and paranormal forces. A mysterious girl with extraordinary abilities becomes their only hope, while a terrifying dimension known as the Upside Down threatens everything they know.',
        poster: 'season1Thumbnail.png',
        backdrop: 'season1Thumbnail.png',
        trailer: 'https://www.youtube.com/embed/b9EkMc79ZSU',
        category: 'scifi',
        type: 'series',
        totalSeasons: 1,
        cast: 'Millie Bobby Brown, Finn Wolfhard, Winona Ryder',
        creator: 'The Duffer Brothers',
        seasons: {
            1: {
                seasonNumber: 1,
                title: 'Season 1',
                year: 2016,
                episodes: 8,
                poster: 'season1Thumbnail.png',
                episodeList: [
                    {
                        episodeNumber: 1,
                        title: 'Chapter One: The Vanishing of Will Byers',
                        duration: '47m',
                        description: 'On his way home from a friend\'s house, young Will sees something terrifying. Nearby, a sinister secret lurks in the depths of a government lab.',
                        thumbnail: 'S01E01.png',
                        videoUrl: 'https://drive.google.com/file/d/16l5AddaeGhETYjf3EVHt-Rk22J4dve41/preview',
                        releaseDate: 'July 15, 2016'
                    },
                    {
                        episodeNumber: 2,
                        title: 'Chapter Two: The Weirdo on Maple Street',
                        duration: '55m',
                        description: 'Lucas, Mike and Dustin try to talk to the girl they found in the woods. Hopper questions an anxious Joyce about an unsettling phone call.',
                        thumbnail: 'S01E02.png',
                        videoUrl:'https://drive.google.com/file/d/1ZnRGgezkSG72Wm7MeaFB2HYH3Z43EysF/preview',
                        releaseDate: 'July 15, 2016'
                    },
                    {
                        episodeNumber: 3,
                        title: 'Chapter Three: Holly, Jolly',
                        duration: '51m',
                        description: 'An increasingly concerned Nancy looks for Barb and finds out what Jonathan\'s been up to. Joyce is convinced Will is trying to talk to her.',
                        thumbnail: 'S01E03.png',
                        videoUrl:'https://drive.google.com/file/d/1U6lDCRGYsein4b9n6UmoxEQbZl1cVGKU/preview',
                        releaseDate: 'July 15, 2016'
                    },
                    {
                        episodeNumber: 4,
                        title: 'Chapter Four: The Body',
                        duration: '50m',
                        description: 'Refusing to believe Will is dead, Joyce tries to connect with her son. The boys give Eleven a makeover. Nancy and Jonathan form an unlikely alliance.',
                        thumbnail: 'S01E04.png',
                        videoUrl:'https://drive.google.com/file/d/1B4wvDhkDtP2oXrcqfLhwD8DBH_WP82F5/preview',
                        
                        releaseDate: 'July 15, 2016'
                    },
                    {
                        episodeNumber: 5,
                        title: 'Chapter Five: The Flea and the Acrobat',
                        duration: '52m',
                        description: 'Hopper breaks into the lab while Nancy and Jonathan confront the force that took Will. The boys ask Mr. Clarke how to travel to another dimension.',
                        thumbnail: 'S01E05.png',
                        videoUrl: 'https://drive.google.com/file/d/1BJJQsBuOVRDSwIdGusfWfHMHtblTfKw4/preview',
                        releaseDate: 'July 15, 2016'
                    },
                    {
                        episodeNumber: 6,
                        title: 'Chapter Six: The Monster',
                        duration: '46m',
                        description: 'A frantic Jonathan looks for Nancy in the darkness, but Steve\'s looking for her, too. Hopper and Joyce uncover the truth about the lab\'s experiments.',
                        thumbnail: 'S01E06.png',
                        videoUrl: 'https://drive.google.com/file/d/1IsUbSHqcBXb7FchWm7TeDfHsCr06RErI/view?usp=sharing/preview',
                        releaseDate: 'July 15, 2016'
                    },
                    {
                        episodeNumber: 7,
                        title: 'Chapter Seven: The Bathtub',
                        duration: '41m',
                        description: 'Eleven struggles to reach Will, while Lucas warns that "the bad men are coming." Nancy and Jonathan show the police what Jonathan caught on camera.',
                        thumbnail: 'S01E07.png',
                        videoUrl: 'https://drive.google.com/file/d/FAKE_LINK_EPISODE_7/preview',
                        releaseDate: 'July 15, 2016'
                    },
                    {
                        episodeNumber: 8,
                        title: 'Chapter Eight: The Upside Down',
                        duration: '54m',
                        description: 'Dr. Brenner holds Hopper and Joyce for questioning while the boys wait with Eleven in the gym. Back at Will\'s, Nancy and Jonathan prepare for battle.',
                        thumbnail: 'S01E08.png',
                        videoUrl: 'https://drive.google.com/file/d/FAKE_LINK_EPISODE_8/preview',
                        releaseDate: 'July 15, 2016'
                    }
                ]
            }
        }
    }
};

// Get all series
function getAllSeries() {
    return Object.values(seriesDB);
}

// Get series by ID
function getSeriesById(seriesId) {
    return seriesDB[seriesId];
}

// Get season data
function getSeasonData(seriesId, seasonNumber) {
    const series = seriesDB[seriesId];
    if (!series || !series.seasons[seasonNumber]) return null;
    return series.seasons[seasonNumber];
}

// Get episode data
function getEpisodeData(seriesId, seasonNumber, episodeNumber) {
    const season = getSeasonData(seriesId, seasonNumber);
    if (!season) return null;
    return season.episodeList.find(ep => ep.episodeNumber === episodeNumber);
}

// Add series to watch history
function addSeriesToHistory(seriesId, seasonNumber, episodeNumber, progress = 0) {
    let history = JSON.parse(localStorage.getItem('seriesHistory') || '[]');
    const existing = history.findIndex(item => 
        item.id === seriesId && 
        item.season === seasonNumber && 
        item.episode === episodeNumber
    );
    
    if (existing !== -1) {
        history[existing].progress = progress;
        history[existing].lastWatched = new Date().toISOString();
    } else {
        history.unshift({
            id: seriesId,
            season: seasonNumber,
            episode: episodeNumber,
            progress: progress,
            lastWatched: new Date().toISOString()
        });
    }
    
    localStorage.setItem('seriesHistory', JSON.stringify(history));
}

// Get series watch history
function getSeriesHistory() {
    return JSON.parse(localStorage.getItem('seriesHistory') || '[]');
}

// Render series card
function renderSeriesCard(series) {
    const history = getSeriesHistory();
    const lastWatched = history.find(item => item.id === series.id);
    
    let continueText = '';
    let seriesBadge = '<div class="series-badge">SERIES</div>';
    if (lastWatched) {
        continueText = `<div class="continue-badge">S${lastWatched.season} E${lastWatched.episode}</div>`;
    }
    
    return `
        <div class="movie-card" onclick="showSeriesModal('${series.id}')">
            <img src="${series.poster}" alt="${series.title}">
            ${seriesBadge}
            ${continueText}
            <div class="movie-card-overlay">
                <div class="movie-card-title">${series.title}</div>
                <div class="movie-card-meta">
                    <span>⭐ ${series.rating}</span>
                    <span>${series.year}</span>
                    <span>${series.totalSeasons} Season${series.totalSeasons > 1 ? 's' : ''}</span>
                </div>
                <div class="movie-card-actions">
                    <button class="card-btn card-btn-play" onclick="event.stopPropagation(); playSeriesFromStart('${series.id}')">▶ Play</button>
                    <button class="card-btn card-btn-info" onclick="event.stopPropagation(); showSeriesModal('${series.id}')">ℹ Info</button>
                </div>
            </div>
        </div>
    `;
}

// Show series modal with seasons
function showSeriesModal(seriesId) {
    const series = seriesDB[seriesId];
    if (!series) return;
    
    const modal = document.getElementById('movieModal');
    const modalBody = document.getElementById('modalBody');
    
    // Get last watched episode
    const history = getSeriesHistory();
    const lastWatched = history.find(item => item.id === seriesId);
    
    let continueButton = '';
    if (lastWatched) {
        continueButton = `<button class="btn-play" onclick="playEpisode('${seriesId}', ${lastWatched.season}, ${lastWatched.episode})">▶ Continue S${lastWatched.season} E${lastWatched.episode}</button>`;
    } else {
        continueButton = `<button class="btn-play" onclick="playSeriesFromStart('${seriesId}')">▶ Play S1 E1</button>`;
    }
    
    modalBody.innerHTML = `
        <img src="${series.poster}" style="width: 100%; border-radius: 20px; margin-bottom: 20px;">
        <h2 style="font-size: 36px; margin-bottom: 15px;">${series.title}</h2>
        <div style="display: flex; gap: 15px; margin-bottom: 20px; color: #aaa;">
            <span style="color: #ffd700;">⭐ ${series.rating}</span>
            <span>${series.year}</span>
            <span>${series.totalSeasons} Season${series.totalSeasons > 1 ? 's' : ''}</span>
        </div>
        <div style="margin-bottom: 20px;">
            <span style="background: rgba(255,0,110,0.2); padding: 5px 15px; border-radius: 15px; font-size: 14px;">${series.genre}</span>
        </div>
        <p style="font-size: 18px; line-height: 1.8; margin-bottom: 30px; color: #ddd;">${series.description}</p>
        <div style="display: flex; gap: 15px; margin-bottom: 30px;">
            ${continueButton}
            <button class="btn-trailer" onclick="playTrailer('${seriesId}')">🎬 Trailer</button>
            <button class="btn-info" onclick="viewEpisodes('${seriesId}')">📺 Episodes</button>
        </div>
        <div id="episodesContainer"></div>
    `;
    
    modal.classList.add('active');
}

// View episodes list
function viewEpisodes(seriesId) {
    const series = seriesDB[seriesId];
    const container = document.getElementById('episodesContainer');
    
    let html = '<div style="margin-top: 30px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 30px;">';
    
    // Loop through seasons
    Object.values(series.seasons).forEach(season => {
        html += `
            <h3 style="font-size: 24px; margin-bottom: 20px; color: #ff006e;">Season ${season.seasonNumber}</h3>
            <div style="display: grid; gap: 15px; margin-bottom: 30px;">
        `;
        
        // Loop through episodes
        season.episodeList.forEach(episode => {
            html += `
                <div class="episode-item" onclick="playEpisode('${seriesId}', ${season.seasonNumber}, ${episode.episodeNumber})">
                    <img src="${episode.thumbnail}" alt="Episode ${episode.episodeNumber}">
                    <div class="episode-info">
                        <div class="episode-title">
                            <span class="episode-number">${episode.episodeNumber}.</span>
                            ${episode.title}
                        </div>
                        <div class="episode-meta">${episode.duration}</div>
                        <div class="episode-description">${episode.description}</div>
                    </div>
                </div>
            `;
        });
        
        html += '</div>';
    });
    
    html += '</div>';
    container.innerHTML = html;
}

// Play series from start
function playSeriesFromStart(seriesId) {
    playEpisode(seriesId, 1, 1);
}

// Play specific episode
function playEpisode(seriesId, seasonNumber, episodeNumber) {
    addSeriesToHistory(seriesId, seasonNumber, episodeNumber, 0);
    window.location.href = `watch-series.html?series=${seriesId}&season=${seasonNumber}&episode=${episodeNumber}`;
}

// Load series content (called from app.js)
function loadSeriesContent() {
    const container = document.getElementById('seriesContent');
    if (!container) return;
    
    const series = getAllSeries();
    if (series.length === 0) {
        container.innerHTML = '<p style="color: #666; padding: 20px;">No series available</p>';
        return;
    }
    container.innerHTML = series.map(s => renderSeriesCard(s)).join('');
}

// Play Trailer (uses app.js playTrailer function)
// No need to redefine, app.js handles both movies and series

// Export for other pages
if (typeof window !== 'undefined') {
    window.seriesDB = seriesDB;
    window.getSeriesById = getSeriesById;
    window.getSeasonData = getSeasonData;
    window.getEpisodeData = getEpisodeData;
    window.addSeriesToHistory = addSeriesToHistory;
    window.getSeriesHistory = getSeriesHistory;
    window.renderSeriesCard = renderSeriesCard;
    window.showSeriesModal = showSeriesModal;
    window.viewEpisodes = viewEpisodes;
    window.playEpisode = playEpisode;
    window.playSeriesFromStart = playSeriesFromStart;
    window.loadSeriesContent = loadSeriesContent;
}

