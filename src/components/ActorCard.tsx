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
      style={{
        width: "140px",
        textAlign: "center",
        textDecoration: "none",
        color: "inherit",
      }}
    >
      {movie.poster_path ? (
        <img
          src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
          alt={movie.title}
          style={{ width: "100%", borderRadius: "8px" }}
        />
      ) : (
        <div
          style={{
            width: "100%",
            height: "210px",
            backgroundColor: "#ccc",
            borderRadius: "8px",
          }}
        />
      )}
      <p style={{ margin: "0.5rem 0 0", fontSize: "0.9rem" }}>{movie.title}</p>
    </Link>
  );
}
