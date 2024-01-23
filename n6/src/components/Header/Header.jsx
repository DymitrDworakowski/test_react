import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <nav>
      <Link to="/" end>
        Home
      </Link>
      <Link to="/movies">Movies</Link>
    </nav>
  );
};

export default Header;
