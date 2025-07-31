import logofooter from "../../assets/logo-tmdb-full.svg";

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-6 px-4 mt-10 text-sm">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <img src={logofooter} alt="TMDb Logo" className="h-10" />
        <p>&copy; 2025 MovieApp. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
