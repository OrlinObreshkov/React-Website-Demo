import classes from "./Footer.module.css";
import FooterSocials from "./footerSocials/FooterSocials";
import PhotosList from "./Photos/PhotosList";
import PostsList from "./Posts/PostsList";
import TwittertsList from "./Tweets/TwitterList";

function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes["footer-inner"]}>
        <TwittertsList />
        <PostsList />
        <PhotosList />
      </div>
      <div className={classes['footer-socials']}>
        <hr/>
        <FooterSocials />
      </div>
    </footer>
  );
}

export default Footer;
