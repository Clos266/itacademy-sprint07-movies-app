import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/movies">Películas</Link>
        </li>
        <li>
          <Link to="/profile">Perfil</Link>
        </li>
      </ul>
    </nav>
  );
}
