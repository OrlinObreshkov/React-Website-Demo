import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { DummyCarouselData } from "../../data/DummyCarouselData";
import CarouselElement from "./CarouselElement";
import classes from "./CarouselSlider.module.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1920 },
    items: 5,
    slidesToSlide: 2
  },
  desktop: {
    breakpoint: { max: 1920, min: 1024 },
    items: 4,
    slidesToSlide: 2
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
  },
};

const carouselElement = DummyCarouselData.map((el) => (
  <CarouselElement
    key={el.id}
    id={el.id}
    img={el.img}
    title={el.title}
    description={el.description}
  />
));

function CarouselSlider() {
  return (
    <section className={classes.section}>
      <Carousel
        draggable={false}
        infinite={true}
        showDots={true}
        responsive={responsive}
      >
        {carouselElement}
      </Carousel>
    </section>
  );
}

export default CarouselSlider;
