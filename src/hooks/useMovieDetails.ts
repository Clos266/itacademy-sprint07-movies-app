import { useEffect, useState } from "react";
import axios from "../lib/axios";

interface CrewMember {
  job: string;
  name: string;
}

export function useMovieDetails(id?: string) {
  const [movie, setMovie] = useState<any>(null);
  const [directors, setDirectors] = useState<string[]>([]);
  const [writers, setWriters] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const fetchMovieDetails = async () => {
      try {
        const movieRes = await axios.get(`/movie/${id}?language=en-EN`);
        setMovie(movieRes.data);

        const creditsRes = await axios.get(`/movie/${id}/credits`);
        const crew: CrewMember[] = creditsRes.data.crew ?? [];

        const directorsList = crew.filter((p) => p.job === "Director");
        const writersList = crew.filter((p) =>
          ["Writer", "Screenplay"].includes(p.job)
        );

        setDirectors([...new Set(directorsList.map((d) => d.name))]);
        setWriters([...new Set(writersList.map((w) => w.name))]);
      } catch (err) {
        console.error("Error fetching movie details:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  return { movie, directors, writers, loading };
}
