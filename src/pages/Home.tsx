import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="text-center mt-20">
      <h1 className="text-3xl font-bold mb-4">homepage MoviesApp</h1>
      <Link to="/movies" className="text-blue-600 hover:underline text-xl">
        open movies
      </Link>
    </div>
  );
}
