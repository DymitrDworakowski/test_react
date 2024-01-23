//компонент Movies, сторінка пошуку кінофільмів за ключовим словом.
import React, { useRef } from "react";

const Movies = ({ onSubmit }) => {
  const formRef = useRef(null);

  const handleSubmit = (evt) => {
    evt.preventDefault();
      const searchItem = formRef.current.elements.searchText.value;
      console.log(searchItem)
    onSubmit(searchItem);
    formRef.current.reset();
  };


  return (
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
  );
};

export default Movies;
