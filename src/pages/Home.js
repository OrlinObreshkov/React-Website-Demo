import { Fragment } from "react";
import MainArticle from "../components/articles/MainArticle";
import Banner from "../components/banner/Banner";
import CarouselSlider from "../components/carousel/CarouselSlider";
import LayoutHeader from "../components/layout/LayoutHeader";
import LayoutMain from "../components/layout/LayoutMain";
import Logo from "../components/logo/Logo";
import ServiceList from "../components/services/ServicesList";

function Home() {
  return (
    <Fragment>
      <LayoutHeader>
        <Logo />
      </LayoutHeader>
      <LayoutMain>
        <Banner />
        <CarouselSlider/>
        <MainArticle/>
        <ServiceList/>
      </LayoutMain>
    </Fragment>
  );
}

export default Home;
