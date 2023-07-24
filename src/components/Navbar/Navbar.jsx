import React from "react";
import styles from "./Navbar.module.css";
import logo from "../../assets/images/logo.svg";
import ButtonPrimarily from "../Button-primary/ButtonPrimarily";

function Navbar() {
  return (
    <nav>
      <div className="container nav">
        <div className={styles.navbar}>
          <a href="index.html">
            <img src={logo} alt="logo" />
          </a>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Articles</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div className={styles.rightSide}>
          <p>Cart (0)</p>
          <ButtonPrimarily />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
