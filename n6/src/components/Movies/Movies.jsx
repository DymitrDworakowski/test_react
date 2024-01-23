//компонент Movies, сторінка пошуку кінофільмів за ключовим словом.
import React, { useCallback,useRef,useEffect,useState } from "react";
import getByNameMovies from '../../api/searchMovies';

const Movies = () => {
    const formRef = useRef(null);
    const [movie, setMovie ]= useState([]);
    const [ query, setQuery ] = useState('');

    // handleSubmit: Ця функція викликається при надсиланні форми пошуку. Вона отримує значення введеного тексту з форми, викликає функцію onSubmit та скидає форму.
  const handleSubmit = (evt) => {
    evt.preventDefault();
      const searchItem = formRef.current.elements.searchText.value;
      console.log(searchItem)
    onSubmit(searchItem);
    formRef.current.reset();
  };
// getByName: Ця асинхронна функція викликає функцію getByNameMovies з параметром query (клічка пошуку). Вона отримує результат пошуку і, якщо він не порожній, оновлює стан movie знайденими фільмами.
    const getByName = useCallback(async () => {
    try {
      
      const response = await getByNameMovies(query);
      console.log(response)
      if (response.length > 0) {
        setMovie(() => [ ...response]);
      }
    
    } catch (error) {
     
    } 
  }, [ setMovie,query ]);

    // useEffect: Цей ефект викликається при зміні query або функції getByName. Якщо значення query не порожнє, він викликає функцію getByName.
useEffect(() => {
    if (query.trim() !== "") {
      getByName();
    }
  }, [query, getByName]);
    
    // onSubmit: Ця функція викликається при відправці форми пошуку. Вона перевіряє, чи не порожній введений текст та встановлює його в якості значення query.
    const onSubmit = (searchItem) => {
    if (searchItem.trim() === "") {
      alert("Input is empty");
      return;
    }
    setQuery(searchItem)
  };

  return (<div>
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
      <ul>
      {movie.map((movies) => (
        <li key={movies.id}>
          <h3>{movies.title}</h3>
        
        </li>
      ))}
    </ul>
      </div>
  );
};

export default Movies;
