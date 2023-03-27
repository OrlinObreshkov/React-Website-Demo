import classes from './SocialElement.module.css'

function SocialElement(props) {
    return (
        <li className={classes['social-element']}>
            <a href="">
                {props.icon}
            </a>
        </li>
    )
}

export default SocialElement