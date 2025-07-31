import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between text-sm font-medium text-white px-6 py-4 bg-primary">
      <ul className="flex gap-4">
        <li>
          <Link to="/" className="hover:text-secondary transition">
            Home
          </Link>
        </li>
        <li>
          <Link to="/movies" className="hover:text-secondary transition">
            Movies
          </Link>
        </li>
        <li>
          <Link to="/movies" className="hover:text-secondary transition">
            People
          </Link>
        </li>
        <li>
          <Link to="/movies" className="hover:text-secondary transition">
            More
          </Link>
        </li>
      </ul>
    </nav>
  );
}
