import Loader from "../Loader/Loader";
import { Link } from "react-router-dom";
import css from "./Home.module.css";

const Home = ({ movies, isLoading, error }) => {
  const http = "https://image.tmdb.org/t/p/w200";
  return (
    <div className={css.film}>
      <ul className={css.film_container}>
        {isLoading && <Loader />}
        {error && <p>Error: {error.message}</p>}
        {movies.map(({ id, title, backdrop_path }) => (
          <Link to={`/movies/${id}`} key={id}>
            <li>
              <h3>{title}</h3>
              <img src={`${http}${backdrop_path}`} alt="Movie" />
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Home;
