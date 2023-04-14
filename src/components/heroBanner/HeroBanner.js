import ButtonMedium from "../UI/buttons/ButtonMedium";
import classes from './HeroBanner.module.css'

function HeroBanner() {
  return (
    <div className={classes['holder']}>
      <a className={classes.a} href="#">Welcome</a>
      <p className={classes.p}>We know what you want </p>
      <ButtonMedium>Learn</ButtonMedium>
    </div>
  );
}

export default HeroBanner;
