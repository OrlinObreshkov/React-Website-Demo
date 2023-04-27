import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { checkReducerSliceActions } from "../../hooks/checkReducer.js/checkReducer";
import classes from "./MainNav.module.css";
import { changeClassReducerActions } from "../../hooks/changeClassReducer/changeClassReducer";
import { FaTimes } from "react-icons/fa";
import { mobileNavActions } from "../../hooks/navbarResponsiveReducer/navbarResponsiveReducer";

function MainNav() {
  const dispatch = useDispatch();
  const mobileNavClass = useSelector((state) => state.mobileNav.mobileNav);

  function showLoginFormHandler() {
    dispatch(checkReducerSliceActions.showLoginForm());
    dispatch(changeClassReducerActions.originalHeroImage());
    dispatch(mobileNavActions.mobileNavClose());
  }

  function showLogoHandler() {
    dispatch(checkReducerSliceActions.showLogo());
    dispatch(changeClassReducerActions.originalHeroImage());
    dispatch(mobileNavActions.mobileNavClose());
  }

  function showArticlesHandler() {
    dispatch(changeClassReducerActions.reduceHeroImage());
    dispatch(checkReducerSliceActions.hideLogo());
    dispatch(mobileNavActions.mobileNavClose());
  }

  function showAboutHandler() {
    dispatch(changeClassReducerActions.reduceHeroImage());
    dispatch(checkReducerSliceActions.hideLogo());
    dispatch(mobileNavActions.mobileNavClose());
  }

  function closeMobileNavHandler() {
    dispatch(mobileNavActions.mobileNavClose());
  }

  return (
    <nav className={`${classes.nav} ${classes[mobileNavClass]}`}>
      <ul className={classes["nav-links"]}>
        <li className={classes["li-element"]}>
          <NavLink
            onClick={showLogoHandler}
            className={classes["a-element"]}
            to="/"
            data-replace="Home"
          >
            <span>Home</span>
          </NavLink>
        </li>
        <li className={classes["li-element"]}>
          <NavLink
            onClick={showArticlesHandler}
            className={classes["a-element"]}
            to="/articles"
            data-replace="Articles"
          >
            <span>Articles</span>
          </NavLink>
        </li>
        <li className={classes["li-element"]}>
          <NavLink
            onClick={showAboutHandler}
            className={classes["a-element"]}
            to="/about"
            data-replace="About"
          >
            <span>About</span>
          </NavLink>
        </li>
        <li className={classes["li-element"]}>
          <a className={classes["a-element"]} href="#" data-replace="Contacts">
            <span>Contacts</span>
          </a>
        </li>
        <li className={classes["li-element"]}>
          <NavLink
            onClick={showLoginFormHandler}
            className={classes["a-element"]}
            to="/login"
            data-replace="Login"
          >
            <span>Login</span>
          </NavLink>
        </li>
      </ul>
      <button onClick={closeMobileNavHandler} className={classes["close-btn"]}>
        <FaTimes />
      </button>
    </nav>
  );
}

export default MainNav;
