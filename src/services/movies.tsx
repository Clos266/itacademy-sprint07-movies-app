import tmdb from "../lib/axios";

export const getPopularMovies = async () => {
  const response = await tmdb.get("/movie/popular", {
    params: { page: 1 },
  });
  return response.data.results;
};
export const getMovieCredits = async (id: string | number) => {
  const res = await tmdb.get(`/movie/${id}/credits`);
  return res.data.cast;
};
