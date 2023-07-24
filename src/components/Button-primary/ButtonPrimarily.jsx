import React, { Component } from "react";
import styles from "./ButtonPrimary.module.css";

export class ButtonPrimarily extends Component {
  render() {
    return (
      <div>
        <button className={styles.btn}>Get a free quote</button>
      </div>
    );
  }
}

export default ButtonPrimarily;
