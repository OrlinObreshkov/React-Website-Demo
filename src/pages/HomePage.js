import { Fragment } from "react";
import MainArticle from "../components/articles/MainArticle";
import Banner from "../components/banner/Banner";
import CarouselSlider from "../components/carousel/CarouselSlider";
import ServiceList from "../components/services/ServicesList";

function HomePage() {
  return (
    <Fragment>
      <Banner />
      <CarouselSlider />
      <MainArticle />
      <ServiceList />
    </Fragment>
  );
}

export default HomePage;
