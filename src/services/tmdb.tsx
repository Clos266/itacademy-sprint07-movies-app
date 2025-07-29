import axios from "axios";

const tmdb = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
  },
});

export const getPopularMovies = async () => {
  const response = await tmdb.get("/movie/popular?language=es-ES&page=1");
  return response.data.results;
};
