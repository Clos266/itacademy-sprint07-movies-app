import { useParams, Link } from "react-router-dom";
import { useActorDetails } from "../hooks/useActorDetails";

export default function ActorDetailsPage() {
  const { id } = useParams();
  const { actor, movies, loading } = useActorDetails(id);

  if (loading) return <p>Cargando...</p>;
  if (!actor) return <p>No se encontró el actor</p>;

  return (
    <div style={{ padding: "1rem" }}>
      <h1>{actor.name}</h1>
      {actor.profile_path && (
        <img
          src={`https://image.tmdb.org/t/p/w300${actor.profile_path}`}
          alt={actor.name}
          style={{ width: "300px", borderRadius: "8px" }}
        />
      )}
      <p>
        <strong>Biografía:</strong>
      </p>
      <p>{actor.biography || "Biografía no disponible."}</p>
      <p>
        <strong>Fecha de nacimiento:</strong> {actor.birthday}
      </p>
      {actor.deathday && (
        <p>
          <strong>Fallecimiento:</strong> {actor.deathday}
        </p>
      )}
      <p>
        <strong>Lugar de nacimiento:</strong> {actor.place_of_birth}
      </p>
      <p>
        <strong>Popularidad:</strong> {actor.popularity}
      </p>

      <h2 style={{ marginTop: "2rem" }}>Películas destacadas</h2>
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        {movies.map((movie) => (
          <Link
            to={`/movies/${movie.id}`}
            key={movie.id}
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
            <p style={{ margin: "0.5rem 0 0", fontSize: "0.9rem" }}>
              {movie.title}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
