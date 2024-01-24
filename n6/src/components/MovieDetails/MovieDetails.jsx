//компонент MovieDetails, сторінка з детальною інформацією про кінофільм.
import React from "react";
import { useParams } from "react-router-dom";

const MovieDetails = ({ movies }) => {
  const { movieId } = useParams();

  // Знаходимо фільм із списку фільмів за його ідентифікатором
  const selectedMovie = movies.find((movie) => movie.id === Number(movieId));

  // Перевіряємо, чи фільм знайдено
  if (!selectedMovie) {
    return <h2>Movie not found</h2>;
  }

  const { title, description, releaseYear, genre } = selectedMovie;

  return (
    <div>
      <h2>{title}</h2>
      <p>Release Year: {releaseYear}</p>
      <p>Genre: {genre}</p>
      <p>Description: {description}</p>
    </div>
  );
};

export default MovieDetails;
