import { useEffect, useState } from "react";
import { getPopularMovies } from "../services/movies";

export function usePopularMovies(page: number = 1) {
  const [movies, setMovies] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [totalPages, setTotalPages] = useState<number | null>(null);

  useEffect(() => {
    let isCancelled = false;

    setLoading(true);
    getPopularMovies(page)
      .then((data) => {
        if (!isCancelled) {
          setMovies((prev) =>
            page === 1 ? data.movies : [...prev, ...data.movies]
          );
          setTotalPages(data.totalPages);
        }
      })
      .catch((err) => {
        if (!isCancelled) setError(err);
      })
      .finally(() => {
        if (!isCancelled) setLoading(false);
      });

    return () => {
      isCancelled = true;
    };
  }, [page]);

  return { movies, loading, error, totalPages };
}
