import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import Movies from "./components/Movies/Movies";

import { useCallback, useState, useEffect } from "react";
import { fetchMovies } from "./api/movie";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getMovies = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await fetchMovies();

      if (response.length > 0) {
        setMovies(() => [...response]);
      }
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }, [setIsLoading, setMovies, setError]);

  useEffect(() => {
    getMovies();
  }, [getMovies]);

  return (
    <div>
      <Header />
      <Movies />
      <MovieDetails />
      <Home movies={movies} isLoading={isLoading} error={error} />
      <Footer />
    </div>
  );
}

export default App;
