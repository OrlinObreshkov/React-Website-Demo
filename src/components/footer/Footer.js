import classes from "./Footer.module.css";
import PhotosList from "./Photos/PhotosList";
import PostsList from "./Posts/PostsList";
import TwittertsList from "./Tweets/TwitterList";

function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes["footer-inner"]}>
        <TwittertsList />
        <PostsList/>
        <PhotosList/>
      </div>
    </footer>
  );
}

export default Footer;
