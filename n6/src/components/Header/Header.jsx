import React from "react";
import { NavLink } from "react-router-dom";
import css from "./Header.module.css";
import { ReactComponent as MovieIcon } from "../../img/movie.svg";

const Header = () => {
  return (
    <div className={css.nav}>
      <MovieIcon className={css.logo} />
      <div className={css.head_buttons}>
        <NavLink className={css.home} to="/">
          Home
        </NavLink>
        <NavLink className={css.movies} to="/movies">
          Movies
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
