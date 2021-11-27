import {searchMovie} from './services/movies.js';

const search = document.getElementById('search');
search.addEventListener('keyup', (event) => {
  const query = event.target.value;
  if (event.key === 'Enter') {
    searchMovie(query).then((movie) => {
      movie.map((mo) => {
        const { title, popularity, poster_path } = mo;
        
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');
        movieCard.innerHTML = `
          <img src="https://image.tmdb.org/t/p/w500${poster_path}" alt="${title}">
          <div class="movie-card-info">
            <p>${title}</p>
            <div class="movie-card-subinfo">
              <i class="fa-solid fa-star"></i>
              <p>${popularity.toFixed(0)}</p>
              </div>
          </div>
        `;
        document.getElementById('content-search').appendChild(movieCard);
      });
    });
  } else {
    console.log('No se puede buscar');
  }
});

