import { DummyArticlesData } from "../../../data/DummyArticlesData";
import ButtonBig from '../../UI/buttons/ButtonBig'
import ArticleElement from "./ArticleElement";
import classes from './ArticlesList.module.css'

function ArticlesList() {
  const articleElement = DummyArticlesData.map((article) => (
    <ArticleElement
      key={article.id}
      id={article.id}
      img={article.img}
      title={article.title}
      description={article.description}
    />
  ));

  return (
    <div className={classes['articles-list']}>
      <div className={classes['articles-list-head']}>
        <h3>Sed lorem etiam consequat</h3>
        <p>
          Tempus cubilia ultrices tempor sagittis. Nisl fermentum consequat
          integer interdum.
        </p>
      </div>
      <div>
        <ul>{articleElement}</ul>
      </div>
      <ButtonBig>More Articles</ButtonBig>
    </div>
  );
}

export default ArticlesList;
