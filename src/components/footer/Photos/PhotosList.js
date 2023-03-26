import classes from "./PhotosList.module.css";
import { FaCamera} from "react-icons/fa";
import { DummyPhotosData } from "../../../data/DummyPhotosData";
import PhotoElement from "./PhotoElement";

function PhotosList() {
  const allPhotos = DummyPhotosData.map((photo) => (
    <PhotoElement key={photo.id} id={photo.id} img={photo.img} />
  ));

  return (
    <div className={classes.photos}>
      <div className={classes["photos-header"]}>
        <FaCamera />
      </div>
      <div className={classes['photos-body']}>{allPhotos}</div>
    </div>
  );
}

export default PhotosList;
