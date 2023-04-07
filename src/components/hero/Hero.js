import classes from "./Hero.module.css";
import heroimg from "../../assets/images/heroimg.jpg";
import { useSelector } from "react-redux";

function Hero() {

  const className = useSelector((state) => state.class.className)

  return (
    <div className={classes[className]}>
      <img src={heroimg} alt="Hero image" className={classes["hero-image"]} />
      <div className={classes["hero-image-overlay"]}></div>
    </div>
  );
}

export default Hero;
