import { useEffect, useState } from "react";
import axios from "../lib/axios";

interface Actor {
  name: string;
  profile_path?: string;
  biography?: string;
  birthday?: string;
  deathday?: string;
  place_of_birth?: string;
  popularity?: number;
}

interface Movie {
  id: number;
  title: string;
  poster_path?: string;
}

export function useActorDetails(id?: string) {
  const [actor, setActor] = useState<Actor | null>(null);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const fetchActorDetails = async () => {
      try {
        const [actorRes, creditsRes] = await Promise.all([
          axios.get(`/person/${id}?language=en-EN`),
          axios.get(`/person/${id}/movie_credits?language=en-EN`),
        ]);

        setActor(actorRes.data);
        setMovies(creditsRes.data.cast.slice(0, 8));
      } catch (err) {
        console.error("Error al obtener los detalles del actor:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchActorDetails();
  }, [id]);

  return { actor, movies, loading };
}
