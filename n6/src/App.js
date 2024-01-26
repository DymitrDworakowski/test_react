import Loader from "./components/Loader/Loader";

import React, { lazy, Suspense, useCallback, useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { fetchMovies } from "./api/movie";
import Cast from "./components/Cast/Cast";
import Reviews from "./components/Reviews/Reviews";

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
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="/movies/:movieId/cast" element={<Cast />} />
            <Route path="/movies/:movieId/reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<h1>NOT FOUND</h1>} />
        </Routes>
        <Footer />
      </div>
    </Suspense>
  );
}

export default App;
