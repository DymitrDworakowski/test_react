import React, { useCallback, useRef, useEffect, useState } from "react";
import { getByNameMovies } from "../../api/movie";
import { Link, useSearchParams, useLocation } from "react-router-dom";
import Loader from "../Loader/Loader";

const Movies = () => {
  const location = useLocation();
  const formRef = useRef(null);
  const [searchFilms, setSearchFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
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
      const response = await getByNameMovies(query);

      if (response.length > 0) {
        // Використовуйте дефолтний стан, якщо стан movies порожній
        setSearchFilms(() => [...response]);
      }
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  }, [setSearchFilms, query]);

  // useEffect: Цей ефект викликається при зміні query або функції getByName.
  // Якщо значення query не порожнє, він викликає функцію getByName.
  useEffect(() => {
    if (query) {
      getByName();
    }
  }, [query, getByName]);

  // onSubmit: Ця функція викликається при відправці форми пошуку.
  // Вона перевіряє, чи не порожній введений текст та встановлює його в якості значення query.
  const onSubmit = (searchItem) => {
    if (searchItem.trim() === "") {
      alert("Input is empty");
      return;
    }

    setSearchParams({ query: searchItem });
  };
  const http = "https://image.tmdb.org/t/p/w200";
  return (
    <div>
      <form ref={formRef} className="form" onSubmit={handleSubmit}>
        <input
          className="input"
          name="searchText"
          type="text"
          autoComplete="off"
          defaultValue={query || ""}
          placeholder="Search movies"
        />
        <button type="submit" className="button">
          <span className="button-label">Search</span>
        </button>
      </form>
      {isLoading && <Loader />}
      {searchFilms.length > 0 && (
        <ul>
          {searchFilms.map(({ id, title, release_date, backdrop_path }) => (
            <Link to={`/movies/${id}`} key={id} state={{ from: location }}>
              <li>
                <h3>{title}</h3>
                <img src={`${http}${backdrop_path}`} alt={title} />
                <p>{release_date}</p>
              </li>
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Movies;
