import { Link } from "react-router-dom";

interface Props {
  cast: {
    id: number;
    name: string;
    character: string;
    profile_path: string | null;
  }[];
}

export default function CastGrid({ cast }: Props) {
  return (
    <div className="overflow-x-auto mt-8">
      <div className="flex gap-4 px-4 py-4 w-max overflow-y-hidden flex-nowrap">
        {cast.map((actor) => {
          if (!actor.profile_path) return null;

          return (
            <Link
              to={`/actor/${actor.id}`}
              key={actor.id}
              className="flex flex-col items-center bg-sky-950/80 p-4 rounded-lg w-40 shadow-lg hover:scale-105 transition-transform shrink-0"
            >
              <img
                src={`https://image.tmdb.org/t/p/w185${actor.profile_path}`}
                alt={actor.name}
                className="w-36 rounded-md mb-2 shadow-md"
                loading="lazy"
              />
              <h3 className="text-sm font-semibold text-white text-center">
                {actor.name}
              </h3>
              <p className="text-xs text-gray-300 text-center">
                {actor.character}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
