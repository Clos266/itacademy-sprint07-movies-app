import { useEffect, useState } from "react";
import { getMovieCredits } from "../services/movies";

export function useCast(id?: string) {
  const [cast, setCast] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const fetchCast = async () => {
      try {
        const credits = await getMovieCredits(id);
        setCast(credits.cast.slice(0, 7));
      } catch (err) {
        console.error("Error al obtener el cast:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCast();
  }, [id]);

  return { cast, loading };
}
