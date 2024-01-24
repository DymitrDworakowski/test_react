import React, { useCallback, useRef, useEffect, useState } from "react";
import { getByNameMovies } from "../../api/movie";

const Movies = ({ filmById, selectMovie, movies, setMovies }) => {
  const formRef = useRef(null);
  const [query, setQuery] = useState("");
  
  // Визначте дефолтний стан для movies
  const defaultMoviesState = useRef([]);
  
  // handleSubmit: Ця функція викликається при надсиланні форми пошуку.
  // Вона отримує значення введеного тексту з форми, викликає функцію onSubmit та скидає форму.
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const searchItem = formRef.current.elements.searchText.value;
    console.log(searchItem);
    onSubmit(searchItem);
    formRef.current.reset();
  };

  // getByName: Ця асинхронна функція викликає функцію getByNameMovies з параметром query (клічка пошуку).
  // Вона отримує результат пошуку і, якщо він не порожній, оновлює стан movie знайденими фільмами.
  const getByName = useCallback(async () => {
    try {
      const response = await getByNameMovies(query);
      console.log(response);
      if (response.length > 0) {
        // Використовуйте дефолтний стан, якщо стан movies порожній
        setMovies(() => [...(movies.length > 0 ? movies : defaultMoviesState.current), ...response]);
      }
    } catch (error) {}
  }, [setMovies, query, movies]);

  // useEffect: Цей ефект викликається при зміні query або функції getByName.
  // Якщо значення query не порожнє, він викликає функцію getByName.
  useEffect(() => {
    if (query.trim() !== "") {
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
    setQuery(searchItem);
    // Якщо стан movies порожній, обновіть його дефолтним станом
    if (movies.length === 0) {
      setMovies(defaultMoviesState.current);
    } else {
      setMovies([]); // За допомогою setMovie([]) в функції onSubmit обнулює масив movie.
    }
  };

  console.log(movies);

  return (
    <div>
      <form ref={formRef} className="form" onSubmit={handleSubmit}>
        <input
          className="input"
          name="searchText"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />
        <button type="submit" className="button">
          <span className="button-label">Search</span>
        </button>
      </form>
      {movies.length > 0 && (
        <ul onClick={() => selectMovie()}>
          {movies.map((film) => (
            <li key={film.id}>
              <h3>{film.title}</h3>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Movies;