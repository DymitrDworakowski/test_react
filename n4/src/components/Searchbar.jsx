const Searchbar = ({ onSubmit }) => {
  return (
    <header class="searchbar">
      <form class="form">
        <button type="submit" class="button">
          <span class="button-label">Search</span>
        </button>

        <input
          class="input"
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
          onSubmit
        />
      </form>
    </header>
  );
};

export default Searchbar;
