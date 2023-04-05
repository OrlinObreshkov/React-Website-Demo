import MainArticle from "../components/articles/mainArticle/MainArticle";
import LayoutArticles from "../components/layout/LayoutArticles";
import Sidebar from "../components/sidebar/Sidebar";

function ArticlesPage() {
  return (
    <LayoutArticles>
      <Sidebar />
      <MainArticle />
    </LayoutArticles>
  );
}

export default ArticlesPage;
