import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../../lib/supabaseClient";

export default function LoginButton() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkUser = async () => {
      const { data } = await supabase.auth.getUser();
      setIsLoggedIn(!!data.user);
    };
    checkUser();

    const { data: listener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setIsLoggedIn(!!session?.user);
      }
    );

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <nav className="flex justify-between text-sm font-medium text-white px-6 py-4 bg-primary">
      <ul className="flex gap-6">
        <li>
          <div className="hover:text-secondary transition cursor-pointer">
            +
          </div>
        </li>
        <li>
          <div className="hover:text-secondary transition cursor-pointer">
            EN
          </div>
        </li>
        {isLoggedIn ? (
          <li>
            <div
              onClick={handleLogout}
              className="hover:text-secondary transition cursor-pointer"
            >
              Logout
            </div>
          </li>
        ) : (
          <>
            <li>
              <Link to="/LoginPage" className="hover:text-secondary transition">
                Login
              </Link>
            </li>
            <li>
              <Link to="/LoginPage" className="hover:text-secondary transition">
                Join TMDB
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
