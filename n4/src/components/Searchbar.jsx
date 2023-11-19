const Searchbar = ({ onSubmit }) => {
  return (
    <header className="searchbar">
      <form className="form">
        <button type="submit" className="button">
          <span className="button-label">Search</span>
        </button>

        <input
          className="input"
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
          onSubmit={onSubmit}
        />
      </form>
    </header>
  );
};

export default Searchbar;
