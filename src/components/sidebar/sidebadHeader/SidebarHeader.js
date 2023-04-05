import classes from './SidebarHeader.module.css'
import ButtonSidebar from '../../UI/buttons/ButtonSidebar';

function SidebarHeader() {
  return (
    <div className={classes['sidebar-header']}>
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
      </div>
        <ButtonSidebar>Learn More</ButtonSidebar>
    </div>
  );
}

export default SidebarHeader;
