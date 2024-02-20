import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { logOut } from "../../redux/auth/operations";
import { useAuth } from "../../hooks/useAuth";
import css from "./UserMenu.module.css";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={css.wrapper}>
      <NavLink className={css.link} to="/profile">
        Edit Profile
      </NavLink>
      <p className={css.username}>Welcome , {user.email}</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
};
