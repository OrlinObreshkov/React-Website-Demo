import classes from './ButtonMedium.module.css'

function ButtonMedium(props) {
    return (
        <button className={`${classes.btn} ${classes.btn01}`}>{props.children}</button>
    )
}

export default ButtonMedium