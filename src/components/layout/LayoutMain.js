import classes from './LayoutMain.module.css'

function LayoutMain(props) {
  return <main className={classes.main}>{props.children}</main>;
}

export default LayoutMain;
