import Sidebar from '../sidebar/Sidebar'
import classes from './LayoutArticles.module.css'

function LayoutArticles(props) {
    return (
        <section className={classes['layout-articles']}>
            {props.children}
        </section>
    )
}

export default LayoutArticles