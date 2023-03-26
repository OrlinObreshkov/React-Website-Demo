import classes from './PostElement.module.css'

function PostElement(props) {
    return (
        <li className={classes.post}>
            <a href='#'>{props.post}</a>
        </li>
    )
}

export default PostElement