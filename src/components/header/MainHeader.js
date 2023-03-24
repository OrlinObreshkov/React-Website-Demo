import Logo from '../logo/Logo';
import classes from './MainHeader.module.css'
import MainNav from "./nav/MainNav";


function MainHeader() {
  return (
    <header className={classes.header}>
      <MainNav />
    </header>
  );
}

export default MainHeader;
