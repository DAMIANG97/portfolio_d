"use client";

import React from "react";
import styles from "./Header.module.scss";
import { useGlobalContext } from "../../../context/GlobalContext";

const Header: React.FC = () => {
  const { setActiveCareer } = useGlobalContext(); // Pobierz metodę do ustawiania aktywnej kariery

  return (
    <header className={styles.header}>
      <nav className={styles.header__menu}>
        <button onClick={() => setActiveCareer("Web Development")} className={styles.header__link}>
          Web Development
        </button>
        <button onClick={() => setActiveCareer("Game development")} className={styles.header__link}>
          Game development
        </button>
        <button onClick={() => setActiveCareer("Pixel Art")} className={styles.header__link}>
          Pixel Art
        </button>
        <button onClick={() => setActiveCareer("Electrical designer")} className={styles.header__link}>
          Electrical designer
        </button>
      </nav>
    </header>
  );
};

export default Header;
