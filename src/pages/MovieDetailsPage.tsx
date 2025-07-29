import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../lib/axios";

export default function MovieDetailsPage() {
  const { id } = useParams();
  const [movie, setMovie] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const res = await axios.get(`/movie/${id}?language=es-ES`);
        setMovie(res.data);
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
    </div>
  );
}
