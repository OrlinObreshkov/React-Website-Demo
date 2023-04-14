import { Fragment } from "react";
import HomeArticle from "../components/articles/HomeArticle";
import CarouselSlider from "../components/carousel/CarouselSlider";
import ServiceList from "../components/services/ServicesList";
import MainBanner from "../components/mainBanner/MainBanner";

function HomePage() {
  return (
    <Fragment>
      <MainBanner/>
      <CarouselSlider />
      <HomeArticle />
      <ServiceList />
    </Fragment>
  );
}

export default HomePage;
