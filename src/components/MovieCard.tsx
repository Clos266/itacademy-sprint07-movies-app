import { Link } from "react-router-dom";

interface MovieCardProps {
  id: number;
  title: string;
  posterPath: string | null;
}

export default function MovieCard({ id, title, posterPath }: MovieCardProps) {
  return (
    <li style={{ width: "200px" }}>
      <Link to={`/movies/${id}`}>
        {posterPath ? (
          <img
            src={`https://image.tmdb.org/t/p/w500${posterPath}`}
            alt={title}
            style={{ width: "100%", borderRadius: "8px" }}
          />
        ) : (
          <div
            style={{
              width: "100%",
              height: "300px",
              backgroundColor: "#ccc",
              borderRadius: "8px",
            }}
          />
        )}
        <p>{title}</p>
      </Link>
    </li>
  );
}
