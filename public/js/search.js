import { showAvatar } from "./header.js";
import { searchMovie } from "./services/movies.js";
const user = localStorage.getItem("user");
showAvatar(user);

const search = document.getElementById("search");
let movieList = [];

const searchMovieByTitle = async (title) => {
  try {
    const movies = await searchMovie(title);
    if (title.length > 0) {
      movieList = [...movies];
    }
  } catch (error) {
    console.log(error);
  }
};

const render = () => {
  movieList.forEach((movie) => {
    const { id, title, poster_path } = movie;
    const movieCard = document.createElement("div");
    movieCard.classList.add("card");
    movieCard.dataset.info = id;
    movieCard.innerHTML = `
    <img class="card__image" src="https://image.tmdb.org/t/p/w500${poster_path}" alt="${title}">
    `;
    document.getElementById("content-search").appendChild(movieCard);
    movieCard.addEventListener("click", (e) => {
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
  });
};

search.addEventListener(
  "keyup",
  async (e) => {
    if (e.key === "Enter") {
      const title = e.target.value;
      await searchMovieByTitle(title);
      render();
    }
    if (e.target.value.length === 0) {
      document.getElementById("content-search").innerHTML = "";
    }
  },
  false
);
