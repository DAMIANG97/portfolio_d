"use client";

import React from "react";
import styles from "./Header.module.scss";
import { useGlobalContext } from "../../../context/GlobalContext";
import { careers } from "@/data/careers";
import Logo from "@/components/Atoms/Logo";

const Header: React.FC = () => {
  const { setActiveCareer } = useGlobalContext();

  const changeCareer = (id: string) => {
    const selectedCareer = careers.find((career) => career.id === id);
    if (selectedCareer) {
      setActiveCareer(selectedCareer.id);
    }
  };

  return (
    <header className={styles.header}>
      <Logo></Logo>
      <nav className={styles.header__menu}>
        {careers.map((career) => (
          <button key={career.id} onClick={() => changeCareer(career.id)} className={styles.header__link}>
            {career.name}
          </button>
        ))}
      </nav>
    </header>
  );
};

export default Header;
