import { useCallback, useState, useEffect } from "react";
import { fetchMovies } from "../../api/movie";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
 

  const getMovies = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await fetchMovies();
      console.log(response)
      if (response.length > 0) {
        setMovies(() => [ ...response]);
      }
    
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }, [setIsLoading, setMovies, setError]);

  useEffect(() => {
    getMovies();
  }, [getMovies]); // Передаємо порожній масив, щоб визначити, що ефект повинен викликатися лише при монтуванні компонента
  // https://image.tmdb.org/t/p/w500/9GBhzXMFjgcZ3FdR9w3bUMMTps5.jpg
  const http = 'https://image.tmdb.org/t/p/w200';
  return (
    <ul>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {movies.map((movie) => (
        <li key={movie.id}>
          <h3>{movie.title}</h3>
          <img src = {`${http}${movie.backdrop_path}`} alt="Movie" />
        </li>
      ))}
    </ul>
  );
};

export default Home;
