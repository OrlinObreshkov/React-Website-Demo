import { Fragment } from "react";
import classes from "./Footer.module.css";
import FooterSocials from "./footerSocials/FooterSocials";
import PhotosList from "./Photos/PhotosList";
import PostsList from "./Posts/PostsList";
import TwittertsList from "./Tweets/TwitterList";

function Footer() {
  return (
    <Fragment>
      <div className={classes["footer-inner"]}>
        <TwittertsList />
        <PostsList />
        <PhotosList />
      </div>
      <div className={classes["footer-socials"]}>
        <hr />
        <FooterSocials />
      </div>
    </Fragment>
  );
}

export default Footer;
