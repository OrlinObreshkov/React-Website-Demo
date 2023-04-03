import { DummyArticlesData } from "../../../data/DummyArticlesData";
import ArticleElement from "./ArticleElement";

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
    <div>
      <div>
        <h3>Sed lorem etiam consequat</h3>
        <p>
          Tempus cubilia ultrices tempor sagittis. Nisl fermentum consequat
          integer interdum.
        </p>
      </div>
      <div>
        <ul>{articleElement}</ul>
      </div>
    </div>
  );
}

export default ArticlesList;
