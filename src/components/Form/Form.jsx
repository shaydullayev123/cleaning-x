import React, { Component } from "react";
import styles from "./Form.module.css";

export class Form extends Component {
  render() {
    return (
      <div className={styles.Form}>
        <form>
          <div className="line">
            <label htmlFor="fname">
              Full name
              <input type="text" id="fname" />
            </label>
            <label htmlFor="phone">
              Phone number
              <input type="number" id="phone" />
            </label>
          </div>
          <div className="line">
            <label htmlFor="address">
              Address
              <input type="text" id="address" />
            </label>
            <label htmlFor="email">
              Email
              <input type="text" id="email" />
            </label>
          </div>
          <div className="line">
            <label htmlFor="serve">
              Requested service
              <input type="text" id="serve" />
            </label>
            <label htmlFor="day">
              Day of service
              <input type="date" />
            </label>
          </div>
          <div className="line">
            <label htmlFor="note">
              Add a note
              <textarea id="note" cols="60" rows="7"></textarea>
            </label>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
