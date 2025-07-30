import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useMovieDetails } from "../hooks/useMovieDetails";
import { useCast } from "../hooks/useCast";

export default function MovieDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const {
    movie,
    directors,
    writers,
    loading: loadingDetails,
  } = useMovieDetails(id);
  const { cast, loading: loadingCast } = useCast(id);

  if (loadingDetails || loadingCast) return <p>Cargando...</p>;
  if (!movie) return <p>No se encontró la película</p>;

  return (
    <div
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "2rem",
        color: "white",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          borderRadius: "12px",
          padding: "2rem",
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        <div style={{ padding: "1rem" }}>
          <h1>{movie.title}</h1>
          <p>{movie.release_date}</p>
          {movie.genres?.length > 0 && (
            <p>{movie.genres.map((g: any) => g.name).join(", ")}</p>
          )}
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            style={{ width: "300px" }}
          />
          <p>
            <strong>Resumen:</strong> {movie.overview}
          </p>
          <p>
            <strong>Fecha de lanzamiento:</strong> {movie.release_date}
          </p>
          <p>
            <strong>Popularidad:</strong> {movie.popularity}
          </p>

          <h2 style={{ marginTop: "1rem" }}>Actores principales</h2>
          <p>
            <strong>Rating:</strong> {movie.vote_average} / 10 (
            {movie.vote_count} votos)
          </p>
        </div>
      </div>
      {directors.length > 0 && (
        <p>
          <strong>Director:</strong> {directors.join(", ")}
        </p>
      )}
      {writers.length > 0 && (
        <p>
          <strong>Guionistas:</strong> {writers.join(", ")}
        </p>
      )}

      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
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
    </div>
  );
}
