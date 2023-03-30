import { useSelector } from 'react-redux';
import classes from './MainHeader.module.css'
import LoggedNav from './nav/LoggedNav';
import MainNav from "./nav/MainNav";


function MainHeader() {
  const {sessionEmail, sessionPassword} = useSelector((state) => state.session)

  return (
    <header className={classes.header}>
      {!sessionEmail && !sessionPassword ?  <MainNav /> : <LoggedNav/>}
    </header>
  );
}

export default MainHeader;
