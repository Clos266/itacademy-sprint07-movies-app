import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/MoviesPage";
import Profile from "./pages/Profile";
import { ProtectedRoute } from "./routes/ProtectedRoute";
import LoginPage from "./pages/LoginPage";
import Layout from "./layouts/layout";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import ActorDetailsPage from "./pages/ActorDetailsPage";

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />

      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route
          path="/movies"
          element={
            <ProtectedRoute>
              <Movies />
            </ProtectedRoute>
          }
        />
        <Route
          path="/actor/:id"
          element={
            <ProtectedRoute>
              <ActorDetailsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/movies/:id"
          element={
            <ProtectedRoute>
              <MovieDetailsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
      </Route>
    </Routes>
  );
}
