import ButtonMedium from "../UI/buttons/ButtonMedium";
import classes from './Logo.module.css'

function Logo() {
  return (
    <div className={classes['logo-holder']}>
      <a href="#" className={classes.a}>Helios</a>
      <p className={classes.p}>We know what you want </p>
      <ButtonMedium>Learn</ButtonMedium>
    </div>
  );
}

export default Logo;
