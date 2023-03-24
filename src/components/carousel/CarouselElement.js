import classes from './CarouselElement.module.css'

function CarouselElement(props) {
    return (
      <div className={classes.card}>
        <a className={classes.a} href="">
          <img src={props.img}></img>
        </a>
        <div className={classes['card-info']}>
          <h3 className={classes.h3}>{props.title}</h3>
          <p>{props.description}</p>
        </div>
      </div>
    );
  }
  
  export default CarouselElement;
  