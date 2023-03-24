import classes from './ButtonCirlce.module.css'

function ButtonCirlce(props) {
    return (
        <button className={`${classes.btn} ${classes.btn01}`}>{props.children}</button>
    )
}

export default ButtonCirlce