import React from "react";
import styles from "./Header.module.scss";
import Logo from "@/components/Atoms/Logo";
import Navigation from "@/components/Molecules/Navigation";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Logo></Logo>
      <Navigation></Navigation>
    </header>
  );
};

export default Header;
