import classes from './ButtonSmall.module.css'

function ButtonSmall(props) {
    return (
        <button className={classes.btn}>{props.children}</button>
    )
}

export default ButtonSmall