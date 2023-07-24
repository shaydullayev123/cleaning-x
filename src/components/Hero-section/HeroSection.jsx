import React, { Component } from "react";
import styles from "./HeroSection.module.css";
import CallPart from "../CallPart/CallPart";
export class HeroSection extends Component {
  render() {
    return (
      <section className={styles.sectionHero}>
        <div className="container">
        <div className={styles.heroSection}>
          <h1>Quality cleaning for your home</h1>
          <p className={styles.heroP}>
            Condimentum mauris sit cursus amet id non neque pharetra nulla
            ornare sed facilisis senectus dapibus nibh ultrices eget suscipit
            aliquet et nulla magna lacus penatibus.
          </p>
         <CallPart/>
        </div>
      </div>
      </section>
    );
  }
}

export default HeroSection;
