import Loader from "../Loader/Loader";
import { fetchMovies } from "../../api/movie";

import { useCallback, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import css from "./Home.module.css";

const Home = () => {
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

  const http = "https://image.tmdb.org/t/p/w300";
  return (
    <div className={css.container} >
      <ul className={css.film_container}>
        {isLoading && <Loader />}
        {error && <p>Error: {error.message}</p>}
        {movies.map(({ id, title, backdrop_path }) => (
          <Link to={`/movies/${id}`} key={id}>
            <li className={css.film}>
              <h3 className={css.title}>{title}</h3>
              <img
                className={css.img}
                src={`${http}${backdrop_path}`}
                alt="Movie"
              />
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Home;
