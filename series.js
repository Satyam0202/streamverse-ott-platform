// TV Series Database
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
    totalSeasons: 2,
    cast: 'Millie Bobby Brown, Finn Wolfhard, Winona Ryder',
    creator: 'The Duffer Brothers',
    seasons: {
      1: {
        seasonNumber: 1,
        title: 'Season 1',
        year: 2016,
        episodes: 8,
        poster: 'season1Thumbnail.png',
        description: 'When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.',
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
            videoUrl: 'https://drive.google.com/file/d/1ZnRGgezkSG72Wm7MeaFB2HYH3Z43EysF/preview',
            releaseDate: 'July 15, 2016'
          },
          {
            episodeNumber: 3,
            title: 'Chapter Three: Holly, Jolly',
            duration: '51m',
            description: 'An increasingly concerned Nancy looks for Barb and finds out what Jonathan\'s been up to. Joyce is convinced Will is trying to talk to her.',
            thumbnail: 'S01E03.png',
            videoUrl: 'https://drive.google.com/file/d/1U6lDCRGYsein4b9n6UmoxEQbZl1cVGKU/preview',
            releaseDate: 'July 15, 2016'
          },
          {
            episodeNumber: 4,
            title: 'Chapter Four: The Body',
            duration: '50m',
            description: 'Refusing to believe Will is dead, Joyce tries to connect with her son. The boys give Eleven a makeover. Nancy and Jonathan form an unlikely alliance.',
            thumbnail: 'S01E04.png',
            videoUrl: 'https://drive.google.com/file/d/1B4wvDhkDtP2oXrcqfLhwD8DBH_WP82F5/preview',
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
            videoUrl: 'https://drive.google.com/file/d/13Rf1IcrZTXJ1v-KBHm8TFiPxSyYd0WbT/preview',
            releaseDate: 'July 15, 2016'
          },
          {
            episodeNumber: 7,
            title: 'Chapter Seven: The Bathtub',
            duration: '41m',
            description: 'Eleven struggles to reach Will, while Lucas warns that "the bad men are coming." Nancy and Jonathan show the police what Jonathan caught on camera.',
            thumbnail: 'S01E07.png',
            videoUrl: 'https://drive.google.com/file/d/19PvHE6epH4XFLiv_xV7ANIgDKJjojpEM/preview',
            releaseDate: 'July 15, 2016'
          },
          {
            episodeNumber: 8,
            title: 'Chapter Eight: The Upside Down',
            duration: '54m',
            description: 'Dr. Brenner holds Hopper and Joyce for questioning while the boys wait with Eleven in the gym. Back at Will\'s, Nancy and Jonathan prepare for battle.',
            thumbnail: 'S01E08.png',
            videoUrl: 'https://drive.google.com/file/d/1SjxTgIzqJfGZnvc4oGaRJ9tmDQYD_8sr/preview',
            releaseDate: 'July 15, 2016'
          }
        ]
      },
      2: {
        seasonNumber: 2,
        title: 'Season 2',
        year: 2017,
        episodes: 9,
        poster: 'thumb_season2.jpg',
        description: 'It\'s been nearly a year since Will\'s strange disappearance. But life in Hawkins is far from normal. A new evil lurks beneath the surface, threatening everyone in town.',
        episodeList: [
          {
            episodeNumber: 1,
            title: 'Chapter One: MADMAX',
            duration: '48m',
            description: 'As the town preps for Halloween, a high-scoring rival shakes things up at the arcade, and a skeptical Hopper inspects a field of rotting pumpkins.',
            thumbnail: 'S02E01.png',
            videoUrl: 'https://drive.google.com/file/d/FAKE_LINK_S2E1/preview',
            releaseDate: 'October 27, 2017'
          },
          {
            episodeNumber: 2,
            title: 'Chapter Two: Trick or Treat, Freak',
            duration: '56m',
            description: 'After Will sees something terrible on trick-or-treat night, Mike wonders whether Eleven is still out there. Nancy wrestles with the truth about Barb.',
            thumbnail: 'S02E02.png',
            videoUrl: 'https://drive.google.com/file/d/FAKE_LINK_S2E2/preview',
            releaseDate: 'October 27, 2017'
          },
          {
            episodeNumber: 3,
            title: 'Chapter Three: The Pollywog',
            duration: '51m',
            description: 'Dustin adopts a strange new pet, and Eleven grows increasingly impatient. A well-meaning Bob urges Will to stand up to his fears.',
            thumbnail: 'S02E03.png',
            videoUrl: 'https://drive.google.com/file/d/FAKE_LINK_S2E3/preview',
            releaseDate: 'October 27, 2017'
          },
          {
            episodeNumber: 4,
            title: 'Chapter Four: Will the Wise',
            duration: '46m',
            description: 'An ailing Will opens up to Joyce. Eleven makes plans to finish what she started. Dustin turns to Steve for help.',
            thumbnail: 'S02E04.png',
            videoUrl: 'https://drive.google.com/file/d/FAKE_LINK_S2E4/preview',
            releaseDate: 'October 27, 2017'
          },
          {
            episodeNumber: 5,
            title: 'Chapter Five: Dig Dug',
            duration: '57m',
            description: 'Nancy and Jonathan swap conspiracy theories with a new ally as Eleven searches for someone from her past. Bob sees into Will\'s mind.',
            thumbnail: 'S02E05.png',
            videoUrl: 'https://drive.google.com/file/d/FAKE_LINK_S2E5/preview',
            releaseDate: 'October 27, 2017'
          },
          {
            episodeNumber: 6,
            title: 'Chapter Six: The Spy',
            duration: '52m',
            description: 'Will\'s connection to a shadowy evil grows stronger, but no one is quite sure how to stop it. Elsewhere, Dustin and Steve forge an unlikely bond.',
            thumbnail: 'S02E06.png',
            videoUrl: 'https://drive.google.com/file/d/FAKE_LINK_S2E6/preview',
            releaseDate: 'October 27, 2017'
          },
          {
            episodeNumber: 7,
            title: 'Chapter Seven: The Lost Sister',
            duration: '45m',
            description: 'Psychic visions draw Eleven to a band of violent outcasts and an angry girl with a shadowy past.',
            thumbnail: 'S02E07.png',
            videoUrl: 'https://drive.google.com/file/d/FAKE_LINK_S2E7/preview',
            releaseDate: 'October 27, 2017'
          },
          {
            episodeNumber: 8,
            title: 'Chapter Eight: The Mind Flayer',
            duration: '48m',
            description: 'An unlikely hero steps forward when a deadly development puts the Hawkins Lab on lockdown, trapping Will and several others inside.',
            thumbnail: 'S02E08.png',
            videoUrl: 'https://drive.google.com/file/d/FAKE_LINK_S2E8/preview',
            releaseDate: 'October 27, 2017'
          },
          {
            episodeNumber: 9,
            title: 'Chapter Nine: The Gate',
            duration: '62m',
            description: 'Eleven makes a plan to finish what she started while the survivors turn up the heat on the monstrous force that is holding Will hostage.',
            thumbnail: 'S02E09.png',
            videoUrl: 'https://drive.google.com/file/d/FAKE_LINK_S2E9/preview',
            releaseDate: 'October 27, 2017'
          }
        ]
      }
    }
  }
};

function getAllSeries() {
  return Object.values(seriesDB);
}

function getSeriesById(seriesId) {
  return seriesDB[seriesId];
}

function getSeasonData(seriesId, seasonNumber) {
  const series = seriesDB[seriesId];
  if(!series || !series.seasons[seasonNumber]) return null;
  return series.seasons[seasonNumber];
}

function getEpisodeData(seriesId, seasonNumber, episodeNumber) {
  const season = getSeasonData(seriesId, seasonNumber);
  if(!season) return null;
  return season.episodeList.find(ep => ep.episodeNumber === episodeNumber);
}

function addSeriesToHistory(seriesId, seasonNumber, episodeNumber, progress = 0) {
  let history = JSON.parse(localStorage.getItem('seriesHistory') || '[]');
  const existing = history.findIndex(item => 
    item.id === seriesId && 
    item.season === seasonNumber && 
    item.episode === episodeNumber
  );
  
  if(existing !== -1) {
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

function getSeriesHistory() {
  return JSON.parse(localStorage.getItem('seriesHistory') || '[]');
}

function renderSeriesCard(series) {
  const history = getSeriesHistory();
  const lastWatched = history.find(item => item.id === series.id);
  
  let continueText = '';
  let seriesBadge = '<div class="series-badge">SERIES</div>';
  if(lastWatched) {
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

function showSeriesModal(seriesId, selectedSeason = 1) {
  const series = seriesDB[seriesId];
  if(!series) return;
  
  const modal = document.getElementById('movieModal');
  const modalBody = document.getElementById('modalBody');
  
  const history = getSeriesHistory();
  const lastWatched = history.find(item => item.id === seriesId);
  
  const currentSeason = series.seasons[selectedSeason];
  const seasonPoster = currentSeason ? currentSeason.poster : series.poster;
  const seasonDescription = currentSeason && currentSeason.description ? currentSeason.description : series.description;
  
  let continueButton = '';
  if(lastWatched) {
    continueButton = `<button class="btn-play" onclick="playEpisode('${seriesId}', ${lastWatched.season}, ${lastWatched.episode})">▶ Continue S${lastWatched.season} E${lastWatched.episode}</button>`;
  } else {
    continueButton = `<button class="btn-play" onclick="playSeriesFromStart('${seriesId}')">▶ Play S1 E1</button>`;
  }
  
  modalBody.innerHTML = `
    <img id="seasonPoster" src="${seasonPoster}" style="width: 100%; border-radius: 20px; margin-bottom: 20px;">
    <h2 style="font-size: 36px; margin-bottom: 15px;">${series.title}</h2>
    <div style="display: flex; gap: 15px; margin-bottom: 20px; color: #aaa;">
      <span style="color: #ffd700;">⭐ ${series.rating}</span>
      <span id="seasonYear">${currentSeason ? currentSeason.year : series.year}</span>
      <span>${series.totalSeasons} Season${series.totalSeasons > 1 ? 's' : ''}</span>
    </div>
    <div style="margin-bottom: 20px;">
      <span style="background: rgba(255,0,110,0.2); padding: 5px 15px; border-radius: 15px; font-size: 14px;">${series.genre}</span>
    </div>
    <p id="seasonDescription" style="font-size: 18px; line-height: 1.8; margin-bottom: 30px; color: #ddd;">${seasonDescription}</p>
    <div style="display: flex; gap: 15px; margin-bottom: 30px; align-items: center; flex-wrap: wrap;">
      ${continueButton}
      <button class="btn-trailer" onclick="playTrailer('${seriesId}')">🎬 Trailer</button>
      <button class="btn-info" onclick="viewEpisodes('${seriesId}')">📺 Episodes</button>
      <select id="topSeasonSelector" onchange="updateSeasonInfo('${seriesId}', parseInt(this.value))" 
        style="background: rgba(30,30,30,0.95); color: white; border: 1px solid rgba(255,255,255,0.3); padding: 10px 35px 10px 15px; border-radius: 25px; font-size: 16px; font-weight: 600; cursor: pointer; outline: none; appearance: none; -webkit-appearance: none; -moz-appearance: none; background-image: url('data:image/svg+xml;charset=UTF-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2212%22 height=%228%22 viewBox=%220 0 12 8%22%3E%3Cpath fill=%22%23ffffff%22 d=%22M1.41 0L6 4.58 10.59 0 12 1.41l-6 6-6-6z%22/%3E%3C/svg%3E'); background-repeat: no-repeat; background-position: right 12px center; background-size: 10px; transition: all 0.2s;">
        ${Object.values(series.seasons).map(season => 
          `<option value="${season.seasonNumber}" ${season.seasonNumber === selectedSeason ? 'selected' : ''}>Season ${season.seasonNumber}</option>`
        ).join('')}
      </select>
    </div>
    <div id="episodesContainer"></div>
  `;
  
  modal.classList.add('active');
}

function updateSeasonInfo(seriesId, selectedSeason) {
  const series = seriesDB[seriesId];
  const currentSeason = series.seasons[selectedSeason];
  
  if(currentSeason) {
    document.getElementById('seasonPoster').src = currentSeason.poster;
    document.getElementById('seasonYear').textContent = currentSeason.year;
    document.getElementById('seasonDescription').textContent = currentSeason.description || series.description;
  }
  
  viewEpisodes(seriesId, selectedSeason);
}

function viewEpisodes(seriesId, selectedSeason = 1) {
  const series = seriesDB[seriesId];
  const container = document.getElementById('episodesContainer');
  
  let seasonOptions = '';
  Object.values(series.seasons).forEach(season => {
    const selected = season.seasonNumber === selectedSeason ? 'selected' : '';
    seasonOptions += `<option value="${season.seasonNumber}" ${selected}>Season ${season.seasonNumber}</option>`;
  });
  
  let html = `
    <div style="margin-top: 30px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 30px;">
      <div style="margin-bottom: 25px;">
        <select id="seasonSelector" onchange="viewEpisodes('${seriesId}', parseInt(this.value))" 
          style="background: rgba(30,30,30,0.95); color: white; border: 1px solid rgba(255,255,255,0.3); padding: 12px 40px 12px 20px; border-radius: 25px; font-size: 18px; font-weight: 600; cursor: pointer; outline: none; appearance: none; -webkit-appearance: none; -moz-appearance: none; background-image: url('data:image/svg+xml;charset=UTF-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2212%22 height=%228%22 viewBox=%220 0 12 8%22%3E%3Cpath fill=%22%23ffffff%22 d=%22M1.41 0L6 4.58 10.59 0 12 1.41l-6 6-6-6z%22/%3E%3C/svg%3E'); background-repeat: no-repeat; background-position: right 15px center; background-size: 12px; transition: all 0.2s;">
          ${seasonOptions}
        </select>
      </div>
      <div style="display: grid; gap: 15px;">
  `;
  
  const season = series.seasons[selectedSeason];
  if(season && season.episodeList) {
    season.episodeList.forEach(episode => {
      html += `
        <div class="episode-item" onclick="playEpisode('${seriesId}', ${season.seasonNumber}, ${episode.episodeNumber})" 
          style="display: flex; gap: 15px; background: rgba(255,255,255,0.05); padding: 15px; border-radius: 10px; cursor: pointer; transition: all 0.3s;">
          <img src="${episode.thumbnail}" alt="Episode ${episode.episodeNumber}" 
            style="width: 150px; height: 85px; object-fit: cover; border-radius: 8px;">
          <div class="episode-info" style="flex: 1;">
            <div class="episode-title" style="font-size: 18px; font-weight: 600; margin-bottom: 8px;">
              <span class="episode-number" style="color: #aaa; margin-right: 8px;">${episode.episodeNumber}.</span>
              ${episode.title}
            </div>
            <div class="episode-meta" style="color: #aaa; font-size: 14px; margin-bottom: 8px;">${episode.duration}</div>
            <div class="episode-description" style="color: #ccc; font-size: 14px; line-height: 1.5;">${episode.description}</div>
          </div>
        </div>
      `;
    });
  }
  
  html += '</div></div>';
  container.innerHTML = html;
}

const style = document.createElement('style');
style.textContent = `
  .episode-item:hover {
    background: rgba(255,255,255,0.1) !important;
    transform: scale(1.02);
  }
  #seasonSelector:hover, #topSeasonSelector:hover {
    background: rgba(40,40,40,0.95) !important;
    border-color: rgba(255,255,255,0.5);
  }
  #seasonSelector:focus, #topSeasonSelector:focus {
    border-color: white;
  }
  #seasonSelector option, #topSeasonSelector option {
    background: #1a1a1a;
    color: white;
    padding: 10px;
  }
  @media (max-width: 768px) {
    #seasonSelector, #topSeasonSelector {
      font-size: 16px !important;
      padding: 10px 35px 10px 15px !important;
    }
    .episode-item {
      flex-direction: column !important;
    }
    .episode-item img {
      width: 100% !important;
      height: auto !important;
      max-height: 200px !important;
    }
  }
  @media (max-width: 480px) {
    #seasonSelector, #topSeasonSelector {
      font-size: 14px !important;
      padding: 8px 30px 8px 12px !important;
    }
  }
`;
document.head.appendChild(style);

function playSeriesFromStart(seriesId) {
  playEpisode(seriesId, 1, 1);
}

function playEpisode(seriesId, seasonNumber, episodeNumber) {
  addSeriesToHistory(seriesId, seasonNumber, episodeNumber, 0);
  window.location.href = `watch-series.html?series=${seriesId}&season=${seasonNumber}&episode=${episodeNumber}`;
}

function loadSeriesContent() {
  const container = document.getElementById('seriesContent');
  if(!container) return;
  
  const series = getAllSeries();
  if(series.length === 0) {
    container.innerHTML = '<p style="color: #666; padding: 20px;">No series available</p>';
    return;
  }
  container.innerHTML = series.map(s => renderSeriesCard(s)).join('');
}

if(typeof window !== 'undefined') {
  window.seriesDB = seriesDB;
  window.getSeriesById = getSeriesById;
  window.getSeasonData = getSeasonData;
  window.getEpisodeData = getEpisodeData;
  window.addSeriesToHistory = addSeriesToHistory;
  window.getSeriesHistory = getSeriesHistory;
  window.renderSeriesCard = renderSeriesCard;
  window.showSeriesModal = showSeriesModal;
  window.updateSeasonInfo = updateSeasonInfo;
  window.viewEpisodes = viewEpisodes;
  window.playEpisode = playEpisode;
  window.playSeriesFromStart = playSeriesFromStart;
  window.loadSeriesContent = loadSeriesContent;
}
