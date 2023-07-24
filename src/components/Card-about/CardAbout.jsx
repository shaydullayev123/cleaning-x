import React, { Component } from "react";
import styles from "./CardAbout.module.css";
import Schedule from "../../assets/images/schedule.svg";
import online from "../../assets/images/pay-online.svg";
import cleaned from "../../assets/images/cleaned.svg";

export class CardAbout extends Component {
  render() {
    return (
      <div className="container">
        <div className={styles.cardsAbout}>
          <div className={styles.cardAbout}>
            <img src={Schedule} alt="schedule online" />
            <h4>1. Schedule online</h4>
            <p className={styles.cardAboutp}>
              Sagittis nibh scelerisque vitae egetolment vulputate sem elementum
              sed n.
            </p>
          </div>{" "}
          <div className={styles.cardAbout}>
            <img src={online} alt="schedule online" />
            <h4>1. Schedule online</h4>
            <p className={styles.cardAboutp}>
              Sagittis nibh scelerisque vitae egetolment vulputate sem elementum
              sed n.
            </p>
          </div>{" "}
          <div className={styles.cardAbout}>
            <img src={cleaned} alt="schedule online" />
            <h4>1. Schedule online</h4>
            <p className={styles.cardAboutp}>
              Sagittis nibh scelerisque vitae egetolment vulputate sem elementum
              sed n.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default CardAbout;
