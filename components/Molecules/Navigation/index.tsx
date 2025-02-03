"use client";

import React, { useState } from "react";
import styles from "./Navigation.module.scss";
import { useGlobalContext } from "../../../context/GlobalContext";
import { careers } from "@/data/careers";
import NavButton from "@/components/Atoms/NavButton";

const Navigation: React.FC = () => {
  const { setActiveCareer } = useGlobalContext();
  const [isMenuOpen, setMenuOpen] = useState(false);

  const changeCareer = (id: string) => {
    const selectedCareer = careers.find((career) => career.id === id);
    if (selectedCareer) {
      setActiveCareer(selectedCareer.id);
    }
    setMenuOpen(false);
  };

  return (
    <nav className={`${styles.navigation} ${isMenuOpen ? styles["navigation--visible"] : ""}`}>
      <button className={styles.menuToggle} onClick={() => setMenuOpen((prev) => !prev)}>
        <img src="/logo/menu.svg" alt="menu" width={64} height={64}></img>
      </button>
      <div className={`${styles.menu} ${isMenuOpen ? styles.open : ""}`}>
        {careers.map((career) => (
          <NavButton key={career.id} id={career.id} name={career.name} onClick={changeCareer} />
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
