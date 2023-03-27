import classes from "./FooterSocials.module.css";
import SocialsList from "./SocialsList";

function FooterSocials() {
  return (
    <div className={classes["socials"]}>
      <div className={classes["socials-head"]}>
        <h3>Nisl turpis nascetur interdum?</h3>
        <p>
          Urna nisl non quis interdum mus ornare ridiculus egestas ridiculus
          lobortis vivamus tempor aliquet.
        </p>
      </div>
      <div className={classes['socials-body']}>
            <SocialsList/>
      </div>
    </div>
  );
}

export default FooterSocials;
