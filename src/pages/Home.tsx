import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getPopularMovies } from "../services/movies";

type Movie = {
  id: number;
  title: string;
  backdrop_path: string;
};

export default function HomePage() {
  const [randomMovie, setRandomMovie] = useState<Movie | null>(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const { movies } = await getPopularMovies();
        const validMovies = movies.filter((m: Movie) => m.backdrop_path);
        if (validMovies.length > 0) {
          const random =
            validMovies[Math.floor(Math.random() * validMovies.length)];
          setRandomMovie(random);
        }
      } catch (error) {
        console.error("Failed to fetch popular movies:", error);
      }
    };

    fetchMovie();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen  text-white p-6">
      {randomMovie && (
        <div className="relative w-full max-w-5xl h-96 rounded-lg overflow-hidden shadow-lg mb-10">
          <img
            src={`https://image.tmdb.org/t/p/original${randomMovie.backdrop_path}`}
            alt={randomMovie.title}
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-secondary opacity-50" />

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10">
            {" "}
            <h1 className="text-4xl font-bold mb-8 text-center">
              Welcome. Millions of movies, TV shows and people to discover.
              Explore now.
            </h1>
          </div>
        </div>
      )}

      <Link
        to="/movies"
        className="bg-secondary text-primary font-bold px-6 py-3 rounded hover:bg-opacity-80 transition"
      >
        Explore Movies
      </Link>
    </div>
  );
}
