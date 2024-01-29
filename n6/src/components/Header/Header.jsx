import React from "react";
import { NavLink } from "react-router-dom";
import css from "./Header.module.css";

const Header = () => {
  return (
    <div className={css.nav}>
      <h1 className={css.logo}>LOGO</h1>
      <NavLink className={css.home} to="/">
        Home
      </NavLink>
      <NavLink className={css.movies} to="/movies">
        Movies
      </NavLink>
    </div>
  );
};

export default Header;
