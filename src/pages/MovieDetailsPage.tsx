import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../lib/axios";
import { getMovieCredits } from "../services/movies";
import { Link } from "react-router-dom";

export default function MovieDetailsPage() {
  const { id } = useParams();
  const [movie, setMovie] = useState<any>(null);
  const [cast, setCast] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const res = await axios.get(`/movie/${id}?language=en-EN`);
        setMovie(res.data);

        const credits = await getMovieCredits(id!);
        setCast(credits.slice(0, 5));
      } catch (err) {
        console.error("Error al obtener los detalles:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (loading) return <p>Cargando...</p>;
  if (!movie) return <p>No se encontró la película</p>;

  return (
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
