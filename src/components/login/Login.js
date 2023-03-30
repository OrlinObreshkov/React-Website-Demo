import classes from "./Login.module.css";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginSliceReducerActions } from "../hooks/loginReducer/loginReducer";
import { useNavigate } from "react-router-dom";
import { checkReducerSliceActions } from "../hooks/checkReducer.js/checkReducer";
import { sessionStorageSliceReducerActions } from "../hooks/sessionStorageReducer/sessionStorageReducer";

function Login() {
  const dispatch = useDispatch();
  const { email, password, error } = useSelector((state) => state.login);
  const navigate = useNavigate()

  function emailHandler(e) {
    dispatch(loginSliceReducerActions.setEmail(e.target.value));
  }

  function passwordHandler(e) {
    dispatch(loginSliceReducerActions.setPassword(e.target.value));
  }

  function submitHandler(e) {
    e.preventDefault()

    if (!email || !password) {
      return dispatch(loginSliceReducerActions.setError('All fields required !'))
    }

    if (!email.includes('@')) {
      return dispatch(loginSliceReducerActions.setError('Email is not valid !'))
    }

    if (password.length < 5) {
      return dispatch(loginSliceReducerActions.setError('Password is to short !'))
    }

    dispatch(sessionStorageSliceReducerActions.setSessionEmail(email))
    dispatch(sessionStorageSliceReducerActions.setSessionPassword(password))
    dispatch(loginSliceReducerActions.resseter())
    dispatch(checkReducerSliceActions.showLogo())
    navigate('/')
  }

  return (
    <Fragment>
      <div className={classes.form}>
        <form onSubmit={submitHandler}>
          <h1>Login</h1>
          <div className={classes.content}>
            <div className={classes.field}>
              <input
                className={classes.input}
                type="email"
                placeholder="Email"
                onChange={emailHandler}
              />
            </div>
            <div className={classes.field}>
              <input
                type="password"
                placeholder="Password"
                onChange={passwordHandler}
              />
            </div>
            {error && <span className={classes.error}>{error}</span>}
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
