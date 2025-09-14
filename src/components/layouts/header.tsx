import logo from "../../..public/images/tmdb-logo.svg";
import Navbar from "./navbar";
import LoginButton from "./loginButton";

export default function Header() {
  return (
    <header className="bg-primary text-white px-6 py-4 flex items-center justify-between shadow-md flex-wrap">
      <div className="flex items-center gap-4 flex-shrink-0">
        <img
          src={logo}
          alt="Logo"
          className="h-6 max-w-full w-auto"
          style={{ maxHeight: "40px" }}
        />
      </div>
      <div className="flex-grow">
        <Navbar />
      </div>
      <LoginButton />
    </header>
  );
}
