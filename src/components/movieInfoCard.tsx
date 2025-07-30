interface Props {
  movie: any;
  directors: string[];
  writers: string[];
}

export default function MovieInfoCard({ movie, directors, writers }: Props) {
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
      <p>
        <strong>Rating:</strong> {movie.vote_average} / 10 ({movie.vote_count}{" "}
        votos)
      </p>

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
    </div>
  );
}
