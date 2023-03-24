import classes from "./Hero.module.css";
import heroimg from '../../assets/images/heroimg.jpg'

function Hero() {
  return (
    <div className={classes["hero-image-container"]}>
      <img
        src={heroimg}
        alt="Hero image"
        className={classes["hero-image"]}
      />
      <div className={classes["hero-image-overlay"]}></div>
    </div>
  );
}

export default Hero;
