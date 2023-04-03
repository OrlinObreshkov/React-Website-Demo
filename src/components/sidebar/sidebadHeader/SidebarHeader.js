import classes from './SidebarHeader.module.css'
import { Fragment } from "react";
import ButtonSmall from "../../UI/buttons/ButtonSmall";

function SidebarHeader() {
  return (
    <Fragment>
      <div>
        <h4>Accumsan sed penatibus</h4>
      </div>
      <div>
        <p>
          Dolor sed fringilla nibh nulla convallis tique ante proin sociis
          accumsan lobortis. Auctor etiam porttitor phasellus tempus cubilia
          ultrices tempor sagittis tellus ante diam nec penatibus dolor cras
          magna tempus feugiat veroeros.
        </p>
        <ButtonSmall>Learn More</ButtonSmall>
      </div>
    </Fragment>
  );
}

export default SidebarHeader;
