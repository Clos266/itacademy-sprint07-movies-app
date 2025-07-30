import { Link } from "react-router-dom";

interface Props {
  cast: {
    id: number;
    name: string;
    character: string;
    profile_path: string | null;
  }[];
}

export default function CastGrid({ cast }: Props) {
  return (
    <div
      style={{
        display: "flex",
        gap: "1rem",
        flexWrap: "wrap",
        marginTop: "2rem",
      }}
    >
      {cast.map((actor) => (
        <Link
          to={`/actor/${actor.id}`}
          key={actor.id}
          style={{ textAlign: "center", width: "120px" }}
        >
          {actor.profile_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w185${actor.profile_path}`}
              alt={actor.name}
              style={{ width: "100%", borderRadius: "8px" }}
            />
          ) : (
            <div
              style={{
                width: "100%",
                height: "175px",
                backgroundColor: "#ccc",
                borderRadius: "8px",
              }}
            />
          )}
          <p style={{ margin: "0.5rem 0 0", fontWeight: "bold" }}>
            {actor.name}
          </p>
          <p style={{ margin: 0, fontSize: "0.9rem" }}>{actor.character}</p>
        </Link>
      ))}
    </div>
  );
}
