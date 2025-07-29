// src/pages/ActorDetailsPage.tsx

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../lib/axios";

export default function ActorDetailsPage() {
  const { id } = useParams();
  const [actor, setActor] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchActorDetails = async () => {
      try {
        const res = await axios.get(`/person/${id}?language=es-ES`);
        setActor(res.data);
      } catch (err) {
        console.error("Error al obtener los detalles del actor:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchActorDetails();
  }, [id]);

  if (loading) return <p>Cargando...</p>;
  if (!actor) return <p>No se encontró el actor</p>;

  return (
    <div style={{ padding: "1rem" }}>
      <h1>{actor.name}</h1>
      {actor.profile_path && (
        <img
          src={`https://image.tmdb.org/t/p/w300${actor.profile_path}`}
          alt={actor.name}
          style={{ width: "300px", borderRadius: "8px" }}
        />
      )}
      <p>
        <strong>Biografía:</strong>
      </p>
      <p>{actor.biography || "Biografía no disponible."}</p>
      <p>
        <strong>Fecha de nacimiento:</strong> {actor.birthday}
      </p>
      {actor.deathday && (
        <p>
          <strong>Fallecimiento:</strong> {actor.deathday}
        </p>
      )}
      <p>
        <strong>Lugar de nacimiento:</strong> {actor.place_of_birth}
      </p>
      <p>
        <strong>Popularidad:</strong> {actor.popularity}
      </p>
    </div>
  );
}
