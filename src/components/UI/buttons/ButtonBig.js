import classes from './ButtonBig.module.css'

function ButtonBig(props) {
    return (
        <button className={classes.btn}>{props.children}</button>
    )
}

export default ButtonBig