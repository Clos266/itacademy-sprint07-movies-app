import { useEffect, useState } from "react";
import { getPopularMovies } from "../services/movies";
import { Link } from "react-router-dom";

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getPopularMovies().then(setMovies).catch(console.error);
  }, []);

  return (
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
  );
}
