import React, { useRef } from "react";
import "./SearchBar.css";

const Searchbar = ({ onSubmit }) => {
  const formRef = useRef(null);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const searchTerm = formRef.current.elements.search.value;
    onSubmit(searchTerm);
    formRef.current.reset();
  };

  return (
    <header className="searchbar">
      <form ref={formRef} className="form" onSubmit={handleSubmit}>
        <button type="submit" className="button">
          <span className="button-label">Search</span>
        </button>

        <input
          className="input"
          name="search"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

export default Searchbar;
