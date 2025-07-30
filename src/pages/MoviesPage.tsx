import { useState } from "react";
import { Link } from "react-router-dom";
import { usePopularMovies } from "../hooks/usePopularMovies";

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
          <li key={movie.id} style={{ width: "200px" }}>
            <Link to={`/movies/${movie.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                style={{ width: "100%", borderRadius: "8px" }}
              />
              <p>{movie.title}</p>
            </Link>
          </li>
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
