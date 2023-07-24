import React, { Component } from "react";
import styles from "./CallPart.module.css";
import ButtonPrimarily from "../Button-primary/ButtonPrimarily";
import iconCall from "../../assets/images/phone-icon.svg";

export class CallPart extends Component {
  render() {
    return (
      <div className={styles.btnncall}>
        <ButtonPrimarily />
        <div className={styles.callPart}>
          <div className="imgSide">
            <img src={iconCall} alt="call icon" className={styles.callIcon} />
          </div>
          <div className={styles.textSide}>
            <p>Call us now</p>
            <h3>(414) 567 - 2109</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default CallPart;
