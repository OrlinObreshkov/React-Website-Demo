import ButtonCirlce from "../UI/buttons/ButtonCircle";
import classes from './Logo.module.css'

function Logo() {
  return (
    <div className={classes['logo-holder']}>
      <a href="#" className={classes.a}>Helios</a>
      <p className={classes.p}>We know what you want </p>
      <ButtonCirlce>Learn</ButtonCirlce>
    </div>
  );
}

export default Logo;
