import classes from './ButtonSidebar.module.css'

function ButtonSidebar(props) {
    return (
        <button className={classes.btn}>{props.children}</button>
    )
}

export default ButtonSidebar