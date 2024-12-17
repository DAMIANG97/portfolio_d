import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a href="/CV_Damian_Grabowski_.pdf" download="CV_Damian_Grabowski_.pdf">
        Pobierz CV
      </a>
    </footer>
  );
};

export default Footer;
