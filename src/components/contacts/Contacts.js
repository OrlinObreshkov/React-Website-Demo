import { useNavigate } from "react-router-dom";
import classes from "./Contacts.module.css";
import { useDispatch, useSelector } from "react-redux";
import { contactsSliceReducerActions } from "../hooks/contactsReducer/contactsReducer";
import { checkReducerSliceActions } from "../hooks/checkReducer.js/checkReducer";
import { useState } from "react";

function Contacts() {
  const dispatch = useDispatch();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(false);
  const phoneRegex = /^(?![ -])(?!.*[- ]$)(?!.*[- ]{2})[0-9- ]+$/;
  const { email, address, phone, message, error } = useSelector(
    (state) => state.contacts
  );
  const navigate = useNavigate();

  function emailHandler(e) {
    dispatch(contactsSliceReducerActions.setEmail(e.target.value));
  }

  function addressHandler(e) {
    dispatch(contactsSliceReducerActions.setAddress(e.target.value));
  }

  function phoneHandler(e) {
    const phoneNumber = e.target.value;
    dispatch(contactsSliceReducerActions.setPhone(phoneNumber));
    setPhoneNumber(phoneNumber)
    setIsValidPhoneNumber(phoneRegex.test(phoneNumber))
  }

  function messageHandler(e) {
    dispatch(contactsSliceReducerActions.setMessage(e.target.value));
  }

  function submitHandler(e) {
    e.preventDefault();

    if (!email || !message) {
      return dispatch(
        contactsSliceReducerActions.setError(
          "Email and message are mandatory !"
        )
      );
    }

    if (!email.includes("@")) {
      return dispatch(
        contactsSliceReducerActions.setError("Email is not valid !")
      );
    }

    if (!isValidPhoneNumber) {
      return dispatch(
        contactsSliceReducerActions.setError("Phone number is not valid !")
      );
    }

    dispatch(contactsSliceReducerActions.resseter());
    dispatch(checkReducerSliceActions.showLogo());
    navigate("/");
  }

  return (
    <div className={classes.form}>
      <form onSubmit={submitHandler}>
        <h1>Contact Us</h1>
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
              type="address"
              placeholder="Address"
              onChange={addressHandler}
            />
          </div>
          <div className={classes.field}>
            <input
              type="phone-number"
              placeholder="Phone"
              value={phoneNumber}
              onChange={phoneHandler}
            />
          </div>
          <div className={classes.field}>
            <textarea
              type="message"
              placeholder="Message"
              onChange={messageHandler}
            />
          </div>
          {error && <span className={classes.error}>{error}</span>}
        </div>
        <div className={classes.action}>
          <button className={classes.button}>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Contacts;
