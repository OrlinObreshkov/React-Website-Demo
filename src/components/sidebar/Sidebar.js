import classes from './Sidebar.module.css'
import ArticlesList from "../articles/articlesSidebar/ArticlesList"
import SidebarHeader from "./sidebadHeader/SidebarHeader"

function Sidebar() {
    return (
        <section className={classes.sidebar}>
            <SidebarHeader/>
            <ArticlesList/>
        </section>
    )
}

export default Sidebar