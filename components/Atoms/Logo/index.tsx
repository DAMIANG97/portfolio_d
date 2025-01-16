import React from "react";
import styles from "./Logo.module.scss";

interface Logo {
  href?: string;
}

const Logo: React.FC<Logo> = ({ href = "#" }) => {
  return (
    <a className={styles["logo"]} href={href} rel="noopener noreferrer">
      Damian Grabowski
    </a>
  );
};

export default Logo;
