import logo from "../../assets/logo-tmdb-header.svg";
import Navbar from "./navbar";

export default function Header() {
  return (
    <header className="bg-primary text-white px-6 py-4 shadow-md">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <img src={logo} alt="Logo" className="h-10" />
        </div>
        <Navbar />
      </div>
    </header>
  );
}
