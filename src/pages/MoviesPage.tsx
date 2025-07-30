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

  if (error) return <p>Error al cargar las películas</p>;

  return (
    <>
      <ul style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        {movies.map((movie: any) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            posterPath={movie.poster_path}
          />
        ))}
      </ul>

      {loading && <p>Cargando...</p>}

      {!loading && page < (totalPages ?? 1) && (
        <button onClick={loadMore} style={{ marginTop: "1rem" }}>
          Cargar más
        </button>
      )}
    </>
  );
}
