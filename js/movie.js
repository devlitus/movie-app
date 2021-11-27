import {getMoviesPopular} from './services/movies.js';

const getMovies = async () => {
  const movies = await getMoviesPopular();
  movies.map((movie) => {
    const {
      title,
      overview,
      poster_path,
      vote_average,
      release_date,
    } = movie;
    const movieCard = document.createElement('div');
    movieCard.classList.add('movie-card');
    movieCard.innerHTML = `
      <img src="https://image.tmdb.org/t/p/w500${poster_path}" alt="${title}">
      <div class="movie-card-info">
        <p>${title}</p>
        <div>
          <p>${vote_average}</p>
          <p>${release_date}</p>
        </div>
      </div>
    `;
    document.getElementById('movies').appendChild(movieCard);
  });
  console.log(movies);
};
getMovies();
