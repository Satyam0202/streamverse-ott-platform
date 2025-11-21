// Tab switching
function switchTab(tabName) {
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
    
    event.target.classList.add('active');
    document.getElementById(tabName).classList.add('active');
    
    if (tabName === 'manage') {
        loadMoviesList();
    } else if (tabName === 'dashboard') {
        updateDashboard();
    }
}

// Update Dashboard Stats
function updateDashboard() {
    const movies = Object.keys(moviesDB).length;
    const history = getWatchHistory();
    
    document.getElementById('totalMovies').textContent = movies;
    document.getElementById('totalViews').textContent = history.length;
}

// Add Movie Form
document.getElementById('addMovieForm').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const newMovie = {
        id: document.getElementById('movieId').value,
        title: document.getElementById('movieTitle').value,
        year: parseInt(document.getElementById('movieYear').value),
        rating: parseFloat(document.getElementById('movieRating').value),
        duration: document.getElementById('movieDuration').value,
        genre: document.getElementById('movieGenre').value,
        category: document.getElementById('movieCategory').value,
        description: document.getElementById('movieDescription').value,
        poster: document.getElementById('moviePoster').value,
        trailer: document.getElementById('movieTrailer').value,
        videoUrl: document.getElementById('movieVideo').value
    };
    
    // Check if ID already exists
    if (moviesDB[newMovie.id]) {
        alert('Movie ID already exists! Please use a unique ID.');
        return;
    }
    
    // Add to database
    moviesDB[newMovie.id] = newMovie;
    
    // Save to localStorage
    localStorage.setItem('customMovies', JSON.stringify(getCustomMovies()));
    
    alert('Movie added successfully!');
    document.getElementById('addMovieForm').reset();
    updateDashboard();
});

// Get custom movies from localStorage
function getCustomMovies() {
    const custom = localStorage.getItem('customMovies');
    return custom ? JSON.parse(custom) : {};
}

// Load custom movies on page load
function loadCustomMovies() {
    const custom = getCustomMovies();
    Object.assign(moviesDB, custom);
}

// Load Movies List
function loadMoviesList() {
    const container = document.getElementById('moviesList');
    const movies = Object.values(moviesDB);
    
    container.innerHTML = movies.map(movie => `
        <div class="movie-item">
            <img src="${movie.poster}" alt="${movie.title}">
            <div class="movie-item-info">
                <div class="movie-item-title">${movie.title}</div>
                <div class="movie-item-meta">
                    ⭐ ${movie.rating} | ${movie.year} | ${movie.duration} | ${movie.genre}
                </div>
                <p style="color: #aaa; margin-bottom: 15px;">${movie.description.substring(0, 100)}...</p>
                <div class="movie-item-actions">
                    <button class="edit-btn" onclick="editMovie('${movie.id}')">Edit</button>
                    <button class="delete-btn" onclick="deleteMovie('${movie.id}')">Delete</button>
                </div>
            </div>
        </div>
    `).join('');
}

// Edit Movie
function editMovie(movieId) {
    const movie = moviesDB[movieId];
    if (!movie) return;
    
    // Switch to add tab and populate form
    switchTab('add');
    document.querySelector('[onclick="switchTab(\'add\')"]').click();
    
    document.getElementById('movieId').value = movie.id;
    document.getElementById('movieTitle').value = movie.title;
    document.getElementById('movieYear').value = movie.year;
    document.getElementById('movieRating').value = movie.rating;
    document.getElementById('movieDuration').value = movie.duration;
    document.getElementById('movieGenre').value = movie.genre;
    document.getElementById('movieCategory').value = movie.category;
    document.getElementById('movieDescription').value = movie.description;
    document.getElementById('moviePoster').value = movie.poster;
    document.getElementById('movieTrailer').value = movie.trailer;
    document.getElementById('movieVideo').value = movie.videoUrl;
    
    document.getElementById('movieId').disabled = true;
}

// Delete Movie
function deleteMovie(movieId) {
    if (!confirm('Are you sure you want to delete this movie?')) return;
    
    delete moviesDB[movieId];
    
    // Update localStorage
    const custom = getCustomMovies();
    delete custom[movieId];
    localStorage.setItem('customMovies', JSON.stringify(custom));
    
    alert('Movie deleted successfully!');
    loadMoviesList();
    updateDashboard();
}

// Initialize
loadCustomMovies();
updateDashboard();
