import { Link } from "react-router-dom";

interface Props {
  movie: {
    id: number;
    title: string;
    poster_path?: string | null;
  };
}

export default function ActorMovieCard({ movie }: Props) {
  return (
    <Link
      to={`/movies/${movie.id}`}
      className="w-36 text-center no-underline text-gray-900 hover:text-secondary transition-colors"
    >
      {movie.poster_path ? (
        <img
          src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
          alt={movie.title}
          className="w-full rounded-lg shadow-md"
          loading="lazy"
        />
      ) : (
        <div className="w-full h-[210px] bg-gray-300 rounded-lg" />
      )}
      <p className="mt-2 text-sm font-medium truncate">{movie.title}</p>
    </Link>
  );
}
