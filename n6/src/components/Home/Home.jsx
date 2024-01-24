import Loader from "../Loader/Loader";
import { Link } from "react-router-dom";

const Home = ({ movies, isLoading, error, selectMovie }) => {
 

  const http = "https://image.tmdb.org/t/p/w200";
  return (
    <ul>
      {isLoading && <Loader />}
      {error && <p>Error: {error.message}</p>}
      {movies.map(({id,title,backdrop_path}) => (
        <Link to={`/movies/:${id}`} key={id}><li  onClick={() => selectMovie(id)}>
          <h3>{title}</h3>
          <img src={`${http}${backdrop_path}`} alt="Movie" />
        </li></Link>
      ))}
    </ul>
  );
};

export default Home;
