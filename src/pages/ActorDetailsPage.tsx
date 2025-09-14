import { useParams } from "react-router-dom";
import { useActorDetails } from "../hooks/useActorDetails";
import ActorMovieCard from "../components/ActorCard";

export default function ActorDetailsPage() {
  const { id } = useParams();
  const { actor, movies, loading } = useActorDetails(id);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen text-lg text-gray-500">
        Loading...
      </div>
    );
  if (!actor)
    return (
      <div className="flex justify-center items-center h-screen text-lg text-red-500">
        Actor not found.
      </div>
    );

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">{actor.name}</h1>

      <div className="flex flex-col md:flex-row gap-8">
        {actor.profile_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w300${actor.profile_path}`}
            alt={actor.name}
            className="rounded-lg shadow-lg w-full max-w-xs mx-auto md:mx-0"
          />
        ) : (
          <div className="w-full max-w-xs h-72 bg-gray-300 rounded-lg mx-auto md:mx-0" />
        )}

        <div className="flex-1 text-gray-800">
          <h2 className="text-2xl font-semibold mb-2">Biography</h2>
          <p className="max-h-80 overflow-y-auto p-2 rounded bg-gray-50 text-gray-800">
            {actor.biography || "Biography not available."}
          </p>

          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <strong>Born:</strong> {actor.birthday || "Unknown"}
            </li>
            {actor.deathday && (
              <li>
                <strong>Died:</strong> {actor.deathday}
              </li>
            )}
            <li>
              <strong>Place of Birth:</strong>{" "}
              {actor.place_of_birth || "Unknown"}
            </li>
            <li>
              <strong>Popularity:</strong>{" "}
              {actor.popularity !== undefined && actor.popularity !== null
                ? actor.popularity.toFixed(1)
                : "Unknown"}
            </li>
          </ul>
        </div>
      </div>

      <h2 className="text-3xl font-semibold mt-12 mb-6">Featured Movies</h2>
      <div className="flex flex-wrap gap-6 justify-center">
        {movies.length > 0 ? (
          movies.map((movie) => <ActorMovieCard key={movie.id} movie={movie} />)
        ) : (
          <p className="text-gray-500">No movies available.</p>
        )}
      </div>
    </div>
  );
}
