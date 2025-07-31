import { useState } from "react";
import { usePopularMovies } from "../hooks/usePopularMovies";
import MovieCard from "../components/MovieCard";

export default function MoviesPage() {
  const [page, setPage] = useState(1);
  const { movies, loading, error, totalPages } = usePopularMovies(page);

  const loadMore = () => {
    if (page < (totalPages ?? 1)) {
      setPage(page + 1);
    }
  };

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen text-red-500">
        <p>⚠️ Error loading movies. Please try again later.</p>
      </div>
    );
  }

  return (
    <div className="px-4 py-8 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-white mb-6 text-center">
        Popular Movies
      </h1>

      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {movies.map((movie: any) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            posterPath={movie.poster_path}
            voteAverage={movie.vote_average}
            releaseDate={movie.release_date}
          />
        ))}
      </ul>

      {loading && <div className="text-center mt-6 text-white">Loading...</div>}

      {!loading && page < (totalPages ?? 1) && (
        <div className="flex justify-center mt-8">
          <button
            onClick={loadMore}
            className="bg-secondary text-primary font-semibold px-6 py-3 rounded hover:bg-opacity-80 transition"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
}
