import { searchMovie } from "./services/movies.js";

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
    const { title, popularity, poster_path } = movie;

    const movieCard = document.createElement("div");
    movieCard.classList.add("movie-card");
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
    document.getElementById("content-search").appendChild(movieCard);
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
