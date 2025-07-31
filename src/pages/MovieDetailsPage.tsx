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

  if (loadingDetails || loadingCast)
    return (
      <div className="flex justify-center items-center min-h-screen bg-primary text-white text-xl">
        <p>Loading...</p>
      </div>
    );
  if (!movie)
    return (
      <div className="flex justify-center items-center min-h-screen bg-primary text-white text-xl">
        <p>Movie not found</p>
      </div>
    );

  return (
    <div
      className="min-h-screen bg-cover bg-center relative"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
      }}
    >
      {/* Overlay semi-transparent secondary color */}
      <div className="absolute inset-0 bg-secondary bg-opacity-50"></div>

      <div className="relative max-w-5xl mx-auto p-8 rounded-lg text-white">
        <MovieInfoCard movie={movie} directors={directors} writers={writers} />
        <CastGrid cast={cast} />
      </div>
    </div>
  );
}
