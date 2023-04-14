import classes from "./MainBanner.module.css";

function MainBanner() {
  return (
    <div className={classes.banner}>
      <h1 className={classes.h1}>
        Hi. You're looking at <span className={classes.span}>Helios.</span>
      </h1>
      <p className={classes.p}>
        We are one of the largest travel companies. We provide our customers
        with great experiences and perfect quality
      </p>
    </div>
  );
}

export default MainBanner;
