import classes from "./PhotoElement.module.css";

function PhotoElement(props) {
  return (
    <div className={classes.photo}>
      <a href="#">
        <img src={props.img} />
      </a>
    </div>
  );
}

export default PhotoElement;
