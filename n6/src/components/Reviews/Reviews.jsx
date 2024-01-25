//компонент Reviews, інформація про огляди. Рендериться на сторінці MovieDetails.

import React from "react";
import { useCallback, useEffect, useState } from "react";
import { getReviews } from "../../api/movie";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { movieId } = useParams();

  const Reviews = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await getReviews(movieId);
      setReviews(() => [...response]);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  }, [setReviews, movieId, setIsLoading]);

  useEffect(() => {
    Reviews();
  }, [Reviews]);
  console.log(reviews);
  return (
    <ul>
      {isLoading && <Loader />}
      {reviews.map(({ id, author, content }) => (
        <li key={id}>
          Author: {author}
          <p>{content}</p>
        </li>
      ))}
    </ul>
  );
};

export default Reviews;
