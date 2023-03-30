import classes from "./LoggedNav.module.css";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { sessionStorageSliceReducerActions } from "../../hooks/sessionStorageReducer/sessionStorageReducer";

function LoggedNav() {
  
  const dispatch = useDispatch()

  function logoutHandler() {
    dispatch(sessionStorageSliceReducerActions.clearSession())
  }

  return (
    <nav className={classes.nav}>
      <ul className={classes["ul-flex"]}>
        <li className={classes["li-element"]}>
          <NavLink className={classes['a-element']} to='/' data-replace='Home'><span>Home</span></NavLink>
        </li>
        <li className={classes["li-element"]}>
          <a className={classes['a-element']} href="#" data-replace='Articles'><span>Articles</span></a>
        </li>
        <li className={classes["li-element"]}>
          <a className={classes['a-element']} href="#" data-replace='Add Article'><span>Add Article</span></a>
        </li>
        <li className={classes["li-element"]}>
          <a className={classes['a-element']} href="#" data-replace='About'><span>About</span></a>
        </li>
        <li className={classes["li-element"]}>
          <a className={classes['a-element']} href="#" data-replace='Contacts'><span>Contacts</span></a>
        </li>
        <li className={classes["li-element"]}>
          <NavLink onClick={logoutHandler} className={classes['a-element']} to='/' data-replace='Logout'><span>Logout</span></NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default LoggedNav;
