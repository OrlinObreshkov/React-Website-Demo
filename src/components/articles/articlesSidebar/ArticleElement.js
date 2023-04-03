import classes from './ArticleElement.module.css'

function ArticleElement(props) {
  return (
    <li className={classes['article-element']}>
      <div className={classes['article-element-container']}>
        <div className={classes['article-img']}>
          <img src={props.img}></img>
        </div>
        <div className={classes['article-content']}>
          <h4>{props.title}</h4>
          <p>{props.description}</p>
        </div>
      </div>
    </li>
  );
}

export default ArticleElement;
