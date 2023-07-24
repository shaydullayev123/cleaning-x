import React, { Component } from "react";
import styles from "./CardArticles.module.css";
const h5Ar = {
  display: "flex",
  color: "#211F54",
  fontFamily: "Roboto",
  fontSize: " 24px",
  fontStyle: " normal",
  fontWeight: "700",
  lineHeight: "34.008px" /* 141.7% */,
  width: "407px !important",
  margin: "52px 0 17px",
};

export class CardArticles extends Component {
  render() {
    return (
      <div className={styles.cardsArticle}>
        <div className={styles.cardArticle}>
          <div className={styles.cardAr}>
            <h5 style={h5Ar}>
              8 best vacuum cleaners to clean any mess for your home in 2022
            </h5>
            <p>
              Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo
              quis odio sit sit ac port titor sit males.
            </p>
            <div className={styles.bottomAr}>
              <h6>Jan 28, 2022</h6>
              <span></span>
            </div>
          </div>
        </div>
        <div className={styles.cardArticle2}>
          <div className={styles.cardAr}>
            <h5 style={h5Ar}>
              How to properly disinfect your phone and other electronics
            </h5>
            <p>
              Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo
              quis odio sit sit ac port titor sit males.
            </p>
            <div className={styles.bottomAr}>
              <h6>Feb 1, 2022</h6>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CardArticles;
