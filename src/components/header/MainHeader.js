import { useDispatch, useSelector } from "react-redux";
import classes from "./MainHeader.module.css";
import LoggedNav from "./nav/LoggedNav";
import MainNav from "./nav/MainNav";
import { FaPhoenixSquadron } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { mobileNavActions } from "../hooks/navbarResponsiveReducer/navbarResponsiveReducer";
import { changeHeaderOnscrollActions } from "../hooks/changeOnscrollHeaderReducer/changeHeaderOnscrollReducer";

function MainHeader() {
  const { sessionEmail, sessionPassword } = useSelector(
    (state) => state.session
  );

  const headerClass = useSelector((state) => state.onscrollHeader.headerClass)

  const dispatch = useDispatch();

  function openMobileNavHandler() {
    dispatch(mobileNavActions.mobileNavOpen());
  }

  function changeHeaderOnscrollColor() {
    if (window.scrollY > 800) {
      dispatch(changeHeaderOnscrollActions.onscrollHeader())
    } else {
      dispatch(changeHeaderOnscrollActions.mainHeader())
    }
  }

  window.addEventListener('scroll', changeHeaderOnscrollColor)

  return (
    <header className={classes[headerClass]}>
      <div className={classes["header-holder"]}>
        <a className={classes["header-logo"]} href="#">
          <FaPhoenixSquadron /> Helios
        </a>
        {!sessionEmail && !sessionPassword ? <MainNav /> : <LoggedNav />}
      <button
        onClick={openMobileNavHandler}
        className={classes["hamburger-btn"]}
      >
        <FaBars />
      </button>
      </div>
    </header>
  );
}

export default MainHeader;
