//компонент Home, домашня сторінка зі списком популярних кінофільмів.
import { useCallback, useState } from "react";
import { fetchMovies } from "../../api/movie";

const Home = () => {

     const [movies, setMovies] = useState([]);
     const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    
  const getMovies = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await fetchMovies();
      if (response.length > 0) {
        setMovies((prevMovies) => [...prevMovies, ...response]);
      }
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }, [setIsLoading, setMovies, setError]);

  console.log(movies);

  return <div>Hope page</div>;
};

export default Home;
