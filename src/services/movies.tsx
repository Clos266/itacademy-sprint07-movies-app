import tmdb from "../lib/axios";

export const getPopularMovies = async (page: number = 1) => {
  const response = await tmdb.get("/movie/popular", {
    params: { page },
  });

  return {
    movies: response.data.results,
    totalPages: response.data.total_pages,
    currentPage: response.data.page,
  };
};
export const getMovieCredits = async (id: string | number) => {
  const res = await tmdb.get(`/movie/${id}/credits`);
  return {
    cast: res.data.cast,
    crew: res.data.crew,
  };
};
