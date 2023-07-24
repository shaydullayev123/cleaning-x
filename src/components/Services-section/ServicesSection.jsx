import React, { Component } from "react";
import styles from "./ServicesSection.module.css";
import ButtonSecondary from "../Button-secondary/ButtonSecondary";
import CardServices from "../Card-services/CardServices";

export class ServicesSection extends Component {
  render() {
    return (
      <div className="container">
        <div className={styles.serSec}>
          <div className={styles.text}>
            <h3>Our Services</h3>
            <ButtonSecondary />
          </div>
          <div className="cardService">
            <CardServices />
          </div>
        </div>
      </div>
    );
  }
}

export default ServicesSection;
