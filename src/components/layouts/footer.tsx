import logofooter from "../../assets/logo-tmdb-full.svg";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-10 px-6 mt-16 text-sm">
      <div className="max-w-screen-xl mx-auto flex justify-center items-start space-x-6">
        <div className="inline-block" style={{ maxWidth: "180px" }}>
          <img
            src={logofooter}
            alt="TMDb Logo"
            className="w-full object-contain"
          />
        </div>

        <div className="inline-block ">
          <h3 className="font-semibold mb-2">The Basics</h3>
          <ul className="text-gray-300">
            <li>
              <Link to="#">About TMDB</Link>
            </li>
            <li>
              <Link to="#">Contact Us</Link>
            </li>
            <li>
              <Link to="#">Support Forums</Link>
            </li>
            <li>
              <Link to="#">API Documentation</Link>
            </li>
            <li>
              <Link to="#">System Status</Link>
            </li>
          </ul>
        </div>

        <div className="inline-block ">
          <h3 className="font-semibold mb-2">Get Involved</h3>
          <ul className="text-gray-300">
            <li>
              <Link to="#">Contribution Bible</Link>
            </li>
            <li>
              <Link to="#">Add New Movie</Link>
            </li>
            <li>
              <Link to="#">Add New TV Show</Link>
            </li>
          </ul>
        </div>

        <div className="inline-block ">
          <h3 className="font-semibold mb-2">Community</h3>
          <ul className="text-gray-300">
            <li>
              <Link to="#">Guidelines</Link>
            </li>
            <li>
              <Link to="#">Discussions</Link>
            </li>
            <li>
              <Link to="#">Leaderboard</Link>
            </li>
          </ul>
        </div>

        <div className="inline-block ">
          <h3 className="font-semibold mb-2">Legal</h3>
          <ul className="text-gray-300">
            <li>
              <Link to="#">Terms of Use</Link>
            </li>
            <li>
              <Link to="#">API Terms of Use</Link>
            </li>
            <li>
              <Link to="#">Privacy Policy</Link>
            </li>
            <li>
              <Link to="#">DMCA Policy</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
