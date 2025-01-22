import React from "react";
import styles from "./Header.module.scss";

import Navigation from "@/components/Molecules/Navigation";
import LogoLink from "@/components/Atoms/LogoLink";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <LogoLink href="#" alt="LOGO" ariaLabel="A man sitting at a computer and programming. With the title - Damian Grabowski" src="/logo/logo.png" height={80} width={240}></LogoLink>
      <Navigation></Navigation>
    </header>
  );
};

export default Header;
