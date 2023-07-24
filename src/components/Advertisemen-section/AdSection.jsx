import React, { Component } from "react";
import styles from "./ADSection.module.css";
import advertisement from "../../assets/images/ad.png";
import CallPart from "../CallPart/CallPart";



export class AdSection extends Component {
  render() {
    return (
      <div className="container">
        <div className={styles.ad}>
          <div className="adImg">
            <img src={advertisement} alt="advertisement" />
          </div>
          <div className="adText">
            <p className={styles.adP}>Covid-19 sanitization</p>
            <h5 className={styles.adSecH4}>
              We follow guidelines to keep you safe from the COVID-19 virus
            </h5>
            <p className={styles.adP2}>
              Lobortis mattis odio leo eget mauris met aliquet semper molestie
              sollicitudin congue massa mauris lectus.
            </p>
            <CallPart />
          </div>
        </div>
      </div>
    );
  }
}

export default AdSection;
