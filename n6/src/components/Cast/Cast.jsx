// компонент Cast, інформація про акторський склад. Рендериться на сторінці MovieDetails.
import React from "react";
import { useCallback, useEffect, useState } from "react";
import { getActors } from "../../api/movie";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";

const Cast = () => {
  const [actors, setActors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { movieId } = useParams();
  

  const Actors = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await getActors(movieId);
      setActors(() => [...response]);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  }, [setActors, movieId, setIsLoading]);

  useEffect(() => {
    Actors();
  }, [Actors]);

  return (
    <ul>
      {isLoading && <Loader />}
      {actors.map(({ id, name, profile_path }) => (
        <li key={id}>
          Name: {name}
          <img
            src={`https://image.tmdb.org/t/p/w200${profile_path}`}
            alt={name}
          />
        </li>
      ))}
    </ul>
  );
};

export default Cast;
