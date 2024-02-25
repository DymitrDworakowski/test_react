import React, { useCallback, useRef, useEffect, useState } from "react";
import { getByNameMovies } from "../../api/movie";
import { Link, useSearchParams, useLocation } from "react-router-dom";
import Loader from "../Loader/Loader";
import css from "./Movies.module.css";
import Button from "./Button/Button";

const Movies = () => {
  const location = useLocation();
  const formRef = useRef(null);
  const [searchFilms, setSearchFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(1);
  const [hasMoreMovies, setHasMoreMovies] = useState(false);
  const query = searchParams.get("query");

  // handleSubmit: Ця функція викликається при надсиланні форми пошуку.
  // Вона отримує значення введеного тексту з форми, викликає функцію onSubmit та скидає форму.
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const searchItem = formRef.current.elements.searchText.value;
    onSubmit(searchItem);
    formRef.current.reset();
  };

  // getByName: Ця асинхронна функція викликає функцію getByNameMovies з параметром query (клічка пошуку).
  // Вона отримує результат пошуку і, якщо він не порожній, оновлює стан movie знайденими фільмами.
  const getByName = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await getByNameMovies({ query, page });

      if (response.length > 0) {
        // Використовуйте дефолтний стан, якщо стан movies порожній
        setSearchFilms((prevParams) => [...prevParams, ...response]);

        setHasMoreMovies(true);
      } else {
        setHasMoreMovies(false); // Встановлення на false, якщо результатів не залишилося
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
    } finally {
      setIsLoading(false);
    }
  }, [setSearchFilms, setHasMoreMovies, query, page]);

  // useEffect: Цей ефект викликається при зміні query або функції getByName.
  // Якщо значення query не порожнє, він викликає функцію getByName.
  useEffect(() => {
    if (query) {
      getByName();
    }
  }, [query, getByName, page]);
  console.log(query);
  // onSubmit: Ця функція викликається при відправці форми пошуку.
  // Вона перевіряє, чи не порожній введений текст та встановлює його в якості значення query.
  const onSubmit = (searchItem) => {
    if (searchItem.trim() === "") {
      alert("Input is empty");
      return;
    }
    setPage(1);
    setSearchParams((prevParams) => ({
      ...prevParams,
      query: searchItem,
    }));
  };

  const handleClick = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const http = "https://image.tmdb.org/t/p/w200";
  return (
    <div className={css.div_movies}>
      <form ref={formRef} className={css.form} onSubmit={handleSubmit}>
        <input
          className="input"
          name="searchText"
          type="text"
          autoComplete="off"
          placeholder="Search movies"
        />
        <button type="submit" className={css.button}>
          <span className="button-label">Search</span>
        </button>
      </form>
      {isLoading && <Loader />}
      {searchFilms.length > 0 && (
        <ul className={css.movies}>
          {searchFilms.map(({ id, title, release_date, backdrop_path }) => (
            <li key={id} className={css.movie}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                <h3>{title}</h3>
                <img
                  src={`${http}${backdrop_path}`}
                  alt={title}
                  className={css.movie_img}
                />
                <p>{release_date}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
      {hasMoreMovies ? (
        <Button onClick={handleClick} />
      ) : (
        <p>No more movies to load.</p>
      )}
    </div>
  );
};

export default Movies;
