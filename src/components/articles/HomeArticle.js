import classes from './HomeArticle.module.css'
import articleimg from '../../assets/images/article.jpg'
import ButtonRectangular from '../UI/buttons/ButtonRectangular';

function HomeArticle() {
  return (
    <article className={classes.article}>
      <div className={classes['article-container']}>
        <div className={classes['article-image-container']}>
          <a href="#">
            <img className={classes['article-image']} src={articleimg}/>
          </a>
        </div>
        <div className={classes['article-head']}>
          <a href="#">Sed massa imperdiet magnis</a>
          <p>
            Sociis aenean eu aenean mollis mollis facilisis primis ornare
            penatibus aenean. Cursus ac enim pulvinar curabitur morbi convallis.
            Lectus malesuada sed fermentum dolore amet.
          </p>
        </div>
        <div className={classes['article-body']}>
          <p>
            ommodo id natoque malesuada sollicitudin elit suscipit. Curae
            suspendisse mauris posuere accumsan massa posuere lacus convallis
            tellus interdum. Amet nullam fringilla nibh nulla convallis ut
            venenatis purus sit arcu sociis. Nunc fermentum adipiscing tempor
            cursus nascetur adipiscing adipiscing. Primis aliquam mus lacinia
            lobortis phasellus suscipit. Fermentum lobortis non tristique ante
            proin sociis accumsan lobortis. Auctor etiam porttitor phasellus
            tempus cubilia ultrices tempor sagittis. Nisl fermentum consequat
            integer interdum integer purus sapien. Nibh eleifend nulla nascetur
            pharetra commodo mi augue interdum tellus. Ornare cursus augue
            feugiat sodales velit lorem. Semper elementum ullamcorper lacinia
            natoque aenean scelerisque.
          </p>
        </div>
        <div className={classes['article-foot']}>
            <ButtonRectangular>Continue Reading</ButtonRectangular>
        </div>
      </div>
    </article>
  );
}

export default HomeArticle;
