import classes from "./About.module.css";

function About() {
  return (
    <section className={classes.about}>
      <div className={classes["about-holder"]}>
        <div className={classes["about-head"]}>
          <h2>Who are we ?</h2>
          <hr/>
        </div>
        <div className={classes["about-body"]}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            fringilla est a nunc sagittis, sit amet finibus purus viverra. Proin
            ultricies augue libero, quis eleifend erat sollicitudin tristique.
            Nam egestas dui fermentum, aliquet tortor eu, scelerisque mi. Etiam
            pharetra justo tellus. Nunc auctor in odio in scelerisque. In turpis
            lectus, consectetur et nunc eget, volutpat lobortis erat. Etiam vel
            dui justo. Nunc ac feugiat mi. Aliquam pharetra tortor id velit
            commodo, dapibus ornare erat finibus. Nunc gravida in neque et
            ullamcorper. Donec et justo ac erat elementum laoreet in at urna.
            Proin erat sapien, mattis vel lorem sit amet, tincidunt volutpat
            erat. Nam posuere diam ac vehicula tincidunt. Proin ut molestie
            risus, ac scelerisque nulla. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae; Donec sit
            amet purus pretium, cursus nunc ac, elementum dui.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            fringilla est a nunc sagittis, sit amet finibus purus viverra. Proin
            ultricies augue libero, quis eleifend erat sollicitudin tristique.
            Nam egestas dui fermentum, aliquet tortor eu, scelerisque mi. Etiam
            pharetra justo tellus. Nunc auctor in odio in scelerisque. In turpis
            lectus, consectetur et nunc eget, volutpat lobortis erat. Etiam vel
            dui justo. Nunc ac feugiat mi. Aliquam pharetra tortor id velit
            commodo, dapibus ornare erat finibus. Nunc gravida in neque et
            ullamcorper. Donec et justo ac erat elementum laoreet in at urna.
            Proin erat sapien, mattis vel lorem sit amet, tincidunt volutpat
            erat. Nam posuere diam ac vehicula tincidunt. Proin ut molestie
            risus, ac scelerisque nulla. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae; Donec sit
            amet purus pretium, cursus nunc ac, elementum dui.
          </p>
          <hr/>
        </div>
      </div>
    </section>
  );
}

export default About;
