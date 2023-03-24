import classes from './ButtonRectangular.module.css'

function ButtonRectangular(props) {
    return (
        <button className={classes.btn}>{props.children}</button>
    )
}

export default ButtonRectangular