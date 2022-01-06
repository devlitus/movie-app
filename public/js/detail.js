import { getDetailMovie } from "../js/services/movies.js";
const id = window.location.search.split("=")[1];
export const detatilMovie = async (id) => {
  console.log(id);
  const divMovieDetail = document.getElementById("movie-detail");
  const div = document.createElement("div");
  const movie = await getDetailMovie(id);
  const { title, overview, poster_path, release_date, vote_average, genres } =
    movie;
  div.innerHTML = `
    <div class="card">
      <img class="card__image" src="https://image.tmdb.org/t/p/w500${poster_path}" alt="${title}">
      <div class="card__content">
        <h2 class="card__title">${title}</h2>
        <p class="card__description">${overview}</p>
        <p class="card__description">${release_date}</p>
        <p class="card__description">${vote_average}</p>
        <p class="card__description">${genres}</p>
      </div>
    </div>
  `;
  divMovieDetail.innerHTML = "";
  divMovieDetail.appendChild(div);
};
