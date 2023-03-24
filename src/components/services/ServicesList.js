import classes from "./ServicesList.module.css";
import { DummyServiceData } from "../../data/DummyServiceData";
import ServiceElement from "./ServiceElement";
import ServicesTitle from "./ServicesTitle";

function ServiceList() {
  const services = DummyServiceData.map((service) => (
    <ServiceElement
      key={service.id}
      id={service.id}
      img={service.img}
      title={service.title}
      description={service.description}
    />
  ));

  return (
    <section className={classes['section-services']}>
      <ServicesTitle />
      <div className={classes["service-list"]}>{services}</div>;
    </section>
  );
}

export default ServiceList;
