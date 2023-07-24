import React, { Component } from "react";
import styles from "./ButtonSecondary.module.css";

export class ButtonSecondary extends Component {
  render() {
    return (
      <div>
        <button className={styles.btn}>Explore services</button>
      </div>
    );
  }
}

export default ButtonSecondary;
