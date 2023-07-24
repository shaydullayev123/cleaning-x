import React, { Component } from "react";
import styles from "./AboutSection.module.css";
import CardAbout from "../Card-about/CardAbout";
import ButtonPrimarily from "../Button-primary/ButtonPrimarily";
import ButtonSecondary from "../Button-secondary/ButtonSecondary";

export class AboutSection extends Component {
  render() {
    return (
      <div className="container">
        <h3 className={styles.abouth3}>About Us</h3>
        <p className={styles.aboutp}>
          Sagittis nibh scelerisque vitae eget vulputate sem elementum sed neque
          nisi felis non ultrices massa id egestas quam velit pretium nu.
        </p>
        <div className="cardsAbout">
          <CardAbout />
        </div>
        <div className={styles.buttonsAbout}>
          <ButtonPrimarily />
          <ButtonSecondary />
        </div>
      </div>
    );
  }
}

export default AboutSection;
