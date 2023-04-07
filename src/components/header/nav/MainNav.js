import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { checkReducerSliceActions } from "../../hooks/checkReducer.js/checkReducer";
import classes from "./MainNav.module.css";
import { changeClassReducerActions } from "../../hooks/changeClassReducer/changeClassReducer";

function MainNav() {
  const dispatch = useDispatch()

  function showLoginFormHandler() {
    dispatch(checkReducerSliceActions.showLoginForm())
    dispatch(changeClassReducerActions.originalHeroImage())
  }
  
  function showLogoHandler() {
    dispatch(checkReducerSliceActions.showLogo())
    dispatch(changeClassReducerActions.originalHeroImage())
  }

  function reduceHeroImgHandler() {
    dispatch(changeClassReducerActions.reduceHeroImage())
    dispatch(checkReducerSliceActions.hideLogo())
  }

  return (
    <nav className={classes.nav}>
      <ul className={classes["ul-flex"]}>
        <li className={classes["li-element"]}>
          <NavLink onClick={showLogoHandler} className={classes['a-element']} to='/' data-replace='Home'><span>Home</span></NavLink>
        </li>
        <li className={classes["li-element"]}>
          <NavLink onClick={reduceHeroImgHandler} className={classes['a-element']} to='/articles' data-replace='Articles'><span>Articles</span></NavLink>
        </li>
        <li className={classes["li-element"]}>
          <a className={classes['a-element']} href="#" data-replace='About'><span>About</span></a>
        </li>
        <li className={classes["li-element"]}>
          <a className={classes['a-element']} href="#" data-replace='Contacts'><span>Contacts</span></a>
        </li>
        <li className={classes["li-element"]}>
          <NavLink onClick={showLoginFormHandler} className={classes['a-element']} to='/login' data-replace='Login'><span>Login</span></NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default MainNav;
