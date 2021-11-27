const apiKey = '98ff23888e6447cdab84f13477adb87e';
const baseUrl = 'https://api.themoviedb.org/3/';
// const imageBaseUrl = 'https://image.tmdb.org/t/p/';
const language = 'es-ES';
const page = 1;

export const getMoviesPopular = async () => {
  const response = await fetch(`${baseUrl}movie/popular?api_key=${apiKey}&language=${language}&page=${page}`);
  const data = await response.json();
  return data.results;
};
export const getMoviesNowPlaying = async () => {
  const response = await fetch(`${baseUrl}movie/now_playing?api_key=${apiKey}&language=${language}&page=${page}`);
  const data = await response.json();
  return data.results;
};
export const getMoviesTopRated = async () => {
  const response = await fetch(`${baseUrl}movie/top_rated?api_key=${apiKey}&language=${language}&page=${page}`);
  const data = await response.json();
  return data.results;
};
export const searchMovie = async (query) => {
  const response = await fetch(`${baseUrl}search/movie/?api_key=${apiKey}&language=${language}&query=${query}&page=${page}`);
  const data = await response.json();
  return data.results;
};

// https://api.themoviedb.org/3/search/movie?api_key=98ff23888e6447cdab84f13477adb87e&language=en-US&query=batman&page=1&include_adult=false
