import React, { Component } from "react";
import styles from "./CardServices.module.css";
import house from "../../assets/images/house.png";
import office from "../../assets/images/office.png";
import industrial from "../../assets/images/industrial.png";

export class CardServices extends Component {
  render() {
    return (
      <div className={styles.cardsServices}>
        <div className={styles.cardService}>
          <img src={house} alt="house" className={styles.house} />
          <h4 className={styles.cardSerH4}>House cleaning</h4>
          <p className={styles.cardSerP}>
            Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
            dalaracc lacus vel facilisis volutpat est.
          </p>
        </div>
        <div className={styles.cardService}>
          <img src={office} alt="house" className={styles.office} />
          <h4 className={styles.cardSerH4}>Office cleaning</h4>
          <p className={styles.cardSerP}>
            Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
            dalaracc lacus vel facilisis volutpat est.
          </p>
        </div>
        <div className={styles.cardService}>
          <img src={industrial} alt="house" className={styles.industrial} />
          <h4 className={styles.cardSerH4}>Industrial cleaning</h4>
          <p className={styles.cardSerP}>
            Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
            dalaracc lacus vel facilisis volutpat est.
          </p>
        </div>
      </div>
    );
  }
}

export default CardServices;
