import { getDetailMovie } from "../js/services/movies.js";

const id = window.location.search.split("=")[1];

const detatilMovie = async (id) => {
  const divMovieDetail = document.getElementById("movie-detail");
  const div = document.createElement("div");
  const movie = await getDetailMovie(id);
  const { title, overview, backdrop_path, release_date, vote_average, genres } =
    movie;
  div.innerHTML = `
  <img class="card__detail__image" src="https://image.tmdb.org/t/p/w500${backdrop_path}" alt="${title}">
  <div class="card__content">
    <h2 class="card__title">${title}</h2>
    <p class="card__description">${overview}</p>
    <hr class="card__line">
    <p class="card__description">Fecha de lanzamiento: ${release_date}</p>
    <p class="card__description">votos: ${vote_average}</p>
    <p class="card__description">Generos: ${genres
      .map((genre) => `<span class="">${genre.name}</span>`)
      .join(", ")}</p>
  </div>
  `;
  div.classList.add("card__detail");
  divMovieDetail.innerHTML = "";
  divMovieDetail.appendChild(div);
};
detatilMovie(id);
