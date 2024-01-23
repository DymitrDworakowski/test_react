import Loader from "../Loader/Loader";

const Home = ({movies,isLoading,error}) => {
 
  const http = 'https://image.tmdb.org/t/p/w200';
  return (
    <ul>
      {isLoading && <Loader/>}
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
