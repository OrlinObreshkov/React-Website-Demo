import classes from './MainArticle.module.css'
import mainArticleImg from '../../../assets/images/article.jpg'

function MainArticle() {
  return (
    <section className={classes['main-article']}>
      <div className={classes['main-article-head']}>
        <h2>Main Article</h2>
        <p>Morbi convallis lectus malesuada sed fermentum dolore amet</p>
      </div>
      <div>
        <div className={classes['main-article-image-container']}>
          <img className={classes['main-article-image']} src={mainArticleImg} />
        </div>
        <div className={classes['main-article-body']}>
          <p>
            Commodo id natoque malesuada sollicitudin elit suscipit. Curae
            suspendisse mauris posuere accumsan massa posuere lacus convallis
            tellus interdum. Amet nullam fringilla nibh nulla convallis ut
            venenatis purus lobortis. Auctor etiam porttitor phasellus tempus
            cubilia ultrices tempor sagittis. Nisl fermentum consequat integer
            interdum integer purus sapien. Nibh eleifend nulla nascetur pharetra
            commodo mi augue interdum tellus. Ornare cursus augue feugiat
            sodales velit lorem. Semper elementum ullamcorper lacinia natoque
            aenean scelerisque vel lacinia mollis quam sodales congue.
          </p>
          <h3>Ultrices tempor sagittis nisl</h3>
          <p>
            Nascetur volutpat nibh ullamcorper vivamus at purus. Cursus ultrices
            porttitor sollicitudin imperdiet at pretium tellus in euismod a
            integer sodales neque. Nibh quis dui quis mattis eget imperdiet
            venenatis feugiat. Neque primis ligula cum erat aenean tristique
            luctus risus ipsum praesent iaculis. Fermentum elit fringilla
            consequat dis arcu. Pellentesque mus tempor vitae pretium sodales
            porttitor lacus. Phasellus egestas odio nisl duis sociis purus
            faucibus morbi. Eget massa mus etiam sociis pharetra magna. Eleifend
            auctor turpis magnis sed porta nisl pretium. Aenean suspendisse
            nulla eget sed etiam parturient orci cursus nibh. Quisque eu nec
            neque felis laoreet diam morbi egestas. Dignissim cras rutrum
            consectetur ut penatibus fermentum nibh erat malesuada varius.
          </p>
          <h3>Augue euismod feugiat tempus</h3>
          <p>
            Pretium tellus in euismod a integer sodales neque. Nibh quis dui
            quis mattis eget imperdiet venenatis feugiat. Neque primis ligula
            cum erat aenean tristique luctus risus ipsum praesent iaculis.
            Fermentum elit ut nunc urna volutpat donec cubilia commodo risus
            morbi. Lobortis vestibulum velit malesuada ante egestas odio nisl
            duis sociis purus faucibus morbi. Eget massa mus etiam sociis
            pharetra magna.
          </p>
        </div>
      </div>
    </section>
  );
}

export default MainArticle;
