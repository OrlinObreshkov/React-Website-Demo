import MainHeader from "../header/MainHeader";
import Hero from "../hero/Hero";
import classes from "./LayoutHero.module.css";

function LayoutHero(props) {
  return (
    <div className={classes.layout}>
      <MainHeader />
      <Hero/>
      <div className={classes['layout-header-inner']}>{props.children}</div>
    </div>
  );
}

export default LayoutHero;
