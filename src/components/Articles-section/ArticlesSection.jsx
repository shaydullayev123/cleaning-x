import React, { Component } from "react";
import styles from "./ArticleSection.module.css";
import ButtonPrimarily from "../Button-primary/ButtonPrimarily";
import ButtonSecondary from "../Button-secondary/ButtonSecondary";
import CardArticles from "../Card-articles/CardArticles";

const button = {
  display: "flex",
  gap: "20px",
};

const h2 = {
  color: "#211F54",
  fontSize: "48px",
  fontStyle: "normal",
  fontWeight: " 700",
  lineHeight: "57.984px" /* 120.8% */,
};
export class ArticlesSection extends Component {
  render() {
    return (
      <div className="container">
        <div className={styles.articleText}>
          <div>
            <h2 style={h2}>Articles & resources</h2>
          </div>
          <div style={button}>
            <ButtonPrimarily />
            <ButtonSecondary />
          </div>
        </div>
        <CardArticles />
      </div>
    );
  }
}

export default ArticlesSection;
