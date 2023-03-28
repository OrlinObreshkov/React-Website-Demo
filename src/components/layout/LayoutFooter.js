import classes from './LayoutFooter.module.css'

function LayoutFooter(props) {
    return (
        <footer className={classes.footer}>
            {props.children}
        </footer>
    )
}

export default LayoutFooter