import Axios from "axios";

const base_url = "https://api.themoviedb.org/3";

const search_url = `${base_url}/search/movie?api_key=<<Your API Key>>&query`;

// const image_url = "https://image.tmdb.org/t/p/w500";

export const searchMovie = (movieName) => {
  return Axios.get(`${search_url}=${movieName}`);
};
