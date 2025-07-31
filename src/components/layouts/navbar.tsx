import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <ul className="flex gap-6 text-white text-sm font-medium">
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
          <Link to="/profile" className="hover:text-secondary transition">
            More
          </Link>
        </li>
      </ul>
    </nav>
  );
}
