import classes from "./MainNav.module.css";

function MainNav() {
  return (
    <nav className={classes.nav}>
      <ul className={classes["ul-flex"]}>
        <li className={classes["li-element"]}>
          <a className={classes['a-element']} href="#" data-replace='Home'><span>Home</span></a>
        </li>
        <li className={classes["li-element"]}>
          <a className={classes['a-element']} href="#" data-replace='Articles'><span>Articles</span></a>
        </li>
        <li className={classes["li-element"]}>
          <a className={classes['a-element']} href="#" data-replace='About'><span>About</span></a>
        </li>
        <li className={classes["li-element"]}>
          <a className={classes['a-element']} href="#" data-replace='Contacts'><span>Contacts</span></a>
        </li>
      </ul>
    </nav>
  );
}

export default MainNav;
