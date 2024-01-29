//компонент MovieDetails, сторінка з детальною інформацією про кінофільм.
import React from "react";
import { useCallback, useEffect, useState,useRef } from "react";
import { getMovieDetails } from "../../api/movie";
import { useParams, Link, Outlet, useNavigate ,useLocation } from "react-router-dom";
import Loader from "../Loader/Loader";

const MovieDetails = () => {
  const [filmInfo, setFilmInfo] = useState([]);
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  // const navigate = useNavigate();
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? "/");
  console.log(backLinkHref);
  
  const MoviesDetails = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await getMovieDetails(movieId);

      setFilmInfo(() => [response]);  
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  }, [setFilmInfo, movieId, setIsLoading]);

  useEffect(() => {
    MoviesDetails();
  }, [MoviesDetails]);

//  const handleGoBack = () => {
//     navigate(-1); // Повертається на попередню сторінку
//   };


  return (
    <div>
      {filmInfo.map(
        ({
          id,
          title,
          release_date,
          overview,
          poster_path,
          vote_average,
          genres,
        }) => (
          <ul key={id}>
            {isLoading && <Loader />}
            <Link type="button"  to={backLinkHref.current}>
              Go back
            </Link>
            <h2>
              {title}({release_date})
            </h2>
            <p>User score: {vote_average} </p>
            <img
              src={`https://image.tmdb.org/t/p/w200${poster_path}`}
              alt={title}
            />
            <p>Overview: {overview}</p>
            <ul>
              <h4>Genres:</h4>
              {genres.map(({ id, name }) => (
                <li key={id}> {name}</li>
              ))}
            </ul>
            <Link to={`/movies/${id}/cast`}>Cast</Link>
            <Link to={`/movies/${id}/reviews`}>Revies</Link>
          </ul>
        )
      )}
      <Outlet />
    </div>
  );
};

export default MovieDetails;
