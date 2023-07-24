import React, { Component } from "react";
import styles from "./ContactSection.module.css";
import Form from "../Form/Form";
import iconCall from "../../assets/images/phone-icon.svg";
import ButtonSecondary from "../Button-secondary/ButtonSecondary"

export class ContactSection extends Component {
  render() {
    return (
      <section className={styles.contact}>
        <div className="container">
          <div className={styles.contactSec}>
            <div className={styles.contactLeft}>
              <h2>Contact Us</h2>
              <p>
                In dignissim euismod pretium amet enim a eu nam ut urna accumsan
                pellentesque lacus duis pharetra eutortor.
              </p>
              <div className={styles.callPart}>
                <div className="imgSide">
                  <img
                    src={iconCall}
                    alt="call icon"
                    className={styles.callIcon}
                  />
                </div>
                <div className={styles.textSide}>
                  <p>Call us now</p>
                  <h3>(414) 567 - 2109</h3>
                </div>
              </div>
              <hr />
              <h3>Not convinced yet?</h3>
              <p>
                Massa bibendum consectetur maurisid gravida purus, dolor dui
                amet morbi non nunc urna purus diam.
              </p>
              <ButtonSecondary />
            </div>
            <Form />
          </div>
        </div>
      </section>
    );
  }
}

export default ContactSection;
