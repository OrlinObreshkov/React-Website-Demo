import classes from './TwitterElement.module.css'

function TwitterElement(props) {
    return (
        <li className={classes.tweet}>
            <p>{props.post}</p>
        </li>
    )
}

export default TwitterElement