import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabaseClient";
import Header from "../components/layouts/header";
import Footer from "../components/layouts/footer";

export default function LoginPage() {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/movies");
    }
  }, [user, navigate]);

  return (
    <>
      <Header />
      <div style={{ maxWidth: 400, margin: "auto", paddingTop: 50 }}>
        <Auth
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          providers={[]}
          redirectTo="/movies"
        />
      </div>
      <Footer />
    </>
  );
}
