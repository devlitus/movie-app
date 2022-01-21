import { showAvatar } from "./header.js";
import { getMoviesPopular } from "./services/movies.js";

const user = localStorage.getItem("user");
showAvatar(user);

const getMovies = async () => {
  const divMovieList = document.getElementById("movies-list");
  const div = document.createElement("div");
  const movies = await getMoviesPopular();
  movies.forEach((movie) => {
    const { id, poster_path, title } = movie;
    div.innerHTML += `
      <div class="card" data-info="${id}">
        <img class="card__image" src="https://image.tmdb.org/t/p/w500${poster_path}" alt="${title}">
      </div>
    `;
    div.classList.add("wrapper");

    divMovieList.appendChild(div);
  });
  div.addEventListener("click", (e) => {
    if (e.target.parentElement.dataset.info) {
      const id = e.target.parentElement.dataset.info;
      if (id) {
        const path = "detail";
        window.history.pushState({}, "", `${path}?id=${id}`);
        location.reload();
        console.log("success");
      } else {
        console.log("errro");
      }
    }
  });
};

document.addEventListener("DOMContentLoaded", getMovies);
