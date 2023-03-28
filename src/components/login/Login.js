import classes from "./Login.module.css";
import { Fragment } from "react";

function Login() {

  return (
    <Fragment>
      <div className={classes.form}>
        <form>
          <h1>Login</h1>
          <div className={classes.content}>
            <div className={classes.field}>
              <input
                className={classes.input}
                type="email"
                placeholder="Email"
              />
            </div>
            <div className={classes.field}>
              <input type="password" placeholder="Password" />
            </div>
          </div>
          <div className={classes.action}>
            <button className={classes.button}>Sign in</button>
          </div>
        </form>
      </div>
    </Fragment>
  );
}

export default Login;
