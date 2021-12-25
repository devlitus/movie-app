import { getMoviesPopular } from "./services/movies.js";
const listMovies = [];
const getMovies = async () => {
  const movies = await getMoviesPopular();
  const movie = movies.map((movie) => {
    const { title, poster_path, vote_average, release_date } = movie;
    const movieCard = document.createElement("div");
    movieCard.classList.add("movie-card");
    movieCard.innerHTML = `
      <img src="https://image.tmdb.org/t/p/w500${poster_path}" alt="${title}">
      <div class="movie-card-title">
        <h1>${title}</h1>
        <div  class="movie-card-info">
          <div class="movie-card-info-item">
            <i class="fa-solid fa-thumbs-up"></i>
            <p>${vote_average.toFixed(1)}</p>
          </div>
          <p>${release_date}</p>
        </div>
      </div>
    `;
    document.getElementById("movies").appendChild(movieCard);
  });
  listMovies.push(movie);
};
getMovies();
