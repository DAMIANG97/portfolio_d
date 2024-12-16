import React from "react";
import styles from "./header.module.scss";

interface HeaderProps {
  setActiveCareer: (career: string) => void;
}

const Header: React.FC<HeaderProps> = ({ setActiveCareer }) => {
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
