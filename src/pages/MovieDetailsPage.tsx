import { useParams } from "react-router-dom";
import { useMovieDetails } from "../hooks/useMovieDetails";
import { useCast } from "../hooks/useCast";
import MovieInfoCard from "../components/movieInfoCard";
import CastGrid from "../components/Cast";

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
        <MovieInfoCard movie={movie} directors={directors} writers={writers} />
        <CastGrid cast={cast} />
      </div>
    </div>
  );
}
