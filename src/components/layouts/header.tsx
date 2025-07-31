import logo from "../../assets/logo-tmdb-header.svg";

export default function Header() {
  return (
    <header>
      <img src={logo} alt="Logo" />
      <h1>MovieApp</h1>
    </header>
  );
}
