import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import { IconContext } from "react-icons";
import { useSelector } from "react-redux";
import LayoutHero from "./components/layout/LayoutHero";
import LayoutMain from "./components/layout/LayoutMain";
import LayoutFooter from "./components/layout/LayoutFooter";
import HeroBanner from "./components/heroBanner/HeroBanner";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import Footer from "./components/footer/Footer";
import ArticlesPage from "./pages/ArticlesPage";
import AboutPage from "./pages/AboutPage";
import ContactsPage from './pages/ContactsPage';


function App() {
  const { showForm, showLogo, showContacts } = useSelector((state) => state.checker);

  return (
    <div className="App">
      <Fragment>
        <LayoutHero>
          {showLogo && <HeroBanner />}
          {showForm && (
            <Routes>
              <Route path="/login" element={<LoginPage />} />
            </Routes>
          )}
          {showContacts && (
            <Routes>
              <Route path="/contacts" element={<ContactsPage/>} />
            </Routes>
          )}
        </LayoutHero>
        <LayoutMain>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/articles" element={<ArticlesPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </LayoutMain>
        <LayoutFooter>
          <IconContext.Provider value={{ size: "35px", color: "white" }}>
            <Footer />
          </IconContext.Provider>
        </LayoutFooter>
      </Fragment>
    </div>
  );
}

export default App;
