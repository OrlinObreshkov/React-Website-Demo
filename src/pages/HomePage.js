import { Fragment } from "react";
import HomeArticle from "../components/articles/HomeArticle";
import Banner from "../components/banner/Banner";
import CarouselSlider from "../components/carousel/CarouselSlider";
import ServiceList from "../components/services/ServicesList";

function HomePage() {
  return (
    <Fragment>
      <Banner />
      <CarouselSlider />
      <HomeArticle />
      <ServiceList />
    </Fragment>
  );
}

export default HomePage;
