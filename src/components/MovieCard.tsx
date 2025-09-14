import { Link } from "react-router-dom";

interface MovieCardProps {
  id: number;
  title: string;
  posterPath: string | null;
  voteAverage?: number;
  releaseDate?: string;
}

export default function MovieCard({
  id,
  title,
  posterPath,
  voteAverage,
  releaseDate,
}: MovieCardProps) {
  const releaseYear = releaseDate ? new Date(releaseDate).getFullYear() : "N/A";

  return (
    <li className="w-[200px] transform transition duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
      <Link to={`/movies/${id}`}>
        {posterPath ? (
          <img
            src={`https://image.tmdb.org/t/p/w500${posterPath}`}
            alt={title}
            className="w-full h-auto rounded-lg shadow-md"
          />
        ) : (
          <div className="w-full h-[300px] bg-gray-300 rounded-lg flex items-center justify-center text-gray-600 text-sm">
            No Image
          </div>
        )}

        <div className="mt-2 text-black text-center">
          <p className="font-semibold truncate">{title}</p>
          <p className="text-sm text-gray-700">
            {releaseYear} · ⭐ {voteAverage?.toFixed(1) ?? "N/A"}
          </p>
        </div>
      </Link>
    </li>
  );
}
