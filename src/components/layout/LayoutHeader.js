import MainHeader from "../header/MainHeader";
import Hero from "../hero/Hero";
import classes from "./LayoutHeader.module.css";

function LayoutHeader(props) {
  return (
    <div className={classes.layout}>
      <MainHeader />
      <Hero/>
      <div className={classes['layout-header-inner']}>{props.children}</div>
    </div>
  );
}

export default LayoutHeader;
