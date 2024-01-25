//компонент MovieDetails, сторінка з детальною інформацією про кінофільм.
import Cast from "../Cast/Cast";
import Revies from "../Reviews/Reviews";

import React from "react";
import { useCallback, useEffect, useState } from "react";
import { getMovieDetails } from "../../api/movie";
import { useParams, Link } from "react-router-dom";

const MovieDetails = ({ setIsLoading }) => {
  const [filmInfo, setFilmInfo] = useState([]);
  const { movieId } = useParams();

  const MoviesDetails = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await getMovieDetails(movieId);
      console.log(response);

      setFilmInfo(() => [response]);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  }, [setFilmInfo, movieId, setIsLoading]);

  useEffect(() => {
    MoviesDetails();
  }, [MoviesDetails]);

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
            <Link to={`/movies/${id}/cast`}>
              Cast
            </Link>
            <Link to={`/movies/${id}/reviews`} >
              Revies
            </Link>
          </ul>
        )
      )}
    </div>
  );
};

export default MovieDetails;
