"use client";

import React from "react";
import styles from "./Navigation.module.scss";
import { useGlobalContext } from "../../../context/GlobalContext";
import { careers } from "@/data/careers";
import NavButton from "@/components/Atoms/NavButton";

const Navigation: React.FC = () => {
  const { setActiveCareer } = useGlobalContext();

  const changeCareer = (id: string) => {
    const selectedCareer = careers.find((career) => career.id === id);
    if (selectedCareer) {
      setActiveCareer(selectedCareer.id);
    }
  };

  return (
    <nav className={styles.navigation}>
      {careers.map((career) => (
        <NavButton key={career.id} id={career.id} name={career.name} onClick={changeCareer} />
      ))}
    </nav>
  );
};

export default Navigation;
