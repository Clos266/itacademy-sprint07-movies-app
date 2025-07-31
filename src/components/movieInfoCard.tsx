interface Props {
  movie: any;
  directors: string[];
  writers: string[];
}

export default function MovieInfoCard({ movie, directors, writers }: Props) {
  return (
    <div className="p-6 bg-white bg-opacity-90 rounded-lg shadow-lg text-gray-900 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">{movie.title}</h1>
      <p className="text-gray-600 mb-4">
        {new Date(movie.release_date).toLocaleDateString()}
      </p>

      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="w-full md:w-72 rounded-lg shadow-md object-cover"
        />

        <div className="flex-1 flex flex-col gap-4">
          {movie.genres?.length > 0 && (
            <p className="italic text-gray-700">
              Genres: {movie.genres.map((g: any) => g.name).join(", ")}
            </p>
          )}

          <p>
            <strong>Summary:</strong>{" "}
            {movie.overview || "No summary available."}
          </p>

          <p>
            <strong>Release Date:</strong>{" "}
            {new Date(movie.release_date).toLocaleDateString()}
          </p>

          <p>
            <strong>Popularity:</strong> {movie.popularity.toFixed(1)}
          </p>

          <p>
            <strong>Rating:</strong> {movie.vote_average.toFixed(1)} / 10 (
            {movie.vote_count} votes)
          </p>

          {directors.length > 0 && (
            <p>
              <strong>Director{directors.length > 1 ? "s" : ""}:</strong>{" "}
              {directors.join(", ")}
            </p>
          )}

          {writers.length > 0 && (
            <p>
              <strong>Writer{writers.length > 1 ? "s" : ""}:</strong>{" "}
              {writers.join(", ")}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
