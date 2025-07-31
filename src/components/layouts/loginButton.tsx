import { Link } from "react-router-dom";

export default function LoginButton() {
  return (
    <nav className="flex justify-between text-sm font-medium text-white px-6 py-4 bg-primary">
      <ul className="flex gap-6">
        <li>
          <Link to="/LoginPage" className="hover:text-secondary transition">
            +
          </Link>
        </li>
        <li>
          <Link to="/LoginPage" className="hover:text-secondary transition">
            EN
          </Link>
        </li>
        <li>
          <Link to="/LoginPage" className="hover:text-secondary transition">
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
}
