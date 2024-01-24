import Loader from "./components/Loader/Loader";

import React, { lazy, Suspense, useCallback, useState, useEffect } from "react";
import { Routes, Route, useNavigate, useParams } from "react-router-dom";
import { fetchMovies } from "./api/movie";

// Змінені імпорти для React.lazy()
const Home = lazy(() => import("./components/Home/Home"));
const Movies = lazy(() => import("./components/Movies/Movies"));
const MovieDetails = lazy(() =>
  import("./components/MovieDetails/MovieDetails")
);
const Header = lazy(() => import("./components/Header/Header"));
const Footer = lazy(() => import("./components/Footer/Footer"));

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const getMovies = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await fetchMovies();

      if (response.length > 0) {
        setMovies(response);
      }
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    getMovies();
  }, [getMovies]);

  return (
    <Suspense fallback={<Loader />}>
      <div>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <Home movies={movies} isLoading={isLoading} error={error} />
            }
          />
          <Route
            path="/movies"
            element={<Movies movies={movies} setMovies={setMovies} />}
          />
          <Route
            path="/movies/:movieId"
            element={<MovieDetails movies={movies} />}
          />
          <Route path="*" element={<h1>NOT FOUND</h1>} />
        </Routes>
        <Footer />
      </div>
    </Suspense>
  );
}

export default App;
