import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import { IconContext } from "react-icons";
import { useSelector } from "react-redux";
import LayoutHero from "./components/layout/LayoutHero";
import LayoutMain from "./components/layout/LayoutMain";
import LayoutFooter from "./components/layout/LayoutFooter";
import Logo from "./components/logo/Logo";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import Footer from "./components/footer/Footer";

function App() {
  const { showForm, showLogo } = useSelector((state) => state.checker);

  return (
    <div className="App">
      <Fragment>
        <LayoutHero>
          {showLogo && <Logo />}
          {showForm && (
            <Routes>
              <Route path="/login" element={<LoginPage />} />
            </Routes>
          )}
        </LayoutHero>
        <LayoutMain>
          <Routes>
            <Route path="/" element={<HomePage />} />
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
