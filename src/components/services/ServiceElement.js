import ButtonSmall from "../UI/buttons/ButtonSmall";
import classes from "./ServiceElement.module.css";

function ServiceElement(props) {
  return (
    // <div className={classes.service}>
    //   <div className={classes['service-img-holder']}>
    //     <a href="#">
    //       <img src={props.img}></img>
    //     </a>
    //   </div>
    //   <div className={classes["service-content"]}>
    //     <a href="#">{props.title}</a>
    //     <p>{props.description}</p>
    //   </div>
    // </div>

    <div className={classes["service-card"]}>
      <div className={classes["service-card-inner"]}>
        <div className={classes["service-card-front"]}>
          <img src={props.img} alt="Avatar" />
        </div>
        <div className={classes["service-card-back"]}>
          <h2>{props.title}</h2>
          <p>{props.description}</p>
          <div className={classes['service-card-btn']}>
            <ButtonSmall>Contact Us</ButtonSmall>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceElement;
