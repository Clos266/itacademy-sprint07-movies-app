import { useEffect, useState } from "react";
import { getPopularMovies } from "../services/movies";

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getPopularMovies().then(setMovies).catch(console.error);
  }, []);

  return (
    <div>
      <h1>popular movies</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
}
