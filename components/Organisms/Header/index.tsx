import React from "react";
import styles from "./Header.module.scss";

import Navigation from "@/components/Molecules/Navigation";
import LogoLink from "@/components/Atoms/LogoLink";
import Wrapper from "@/components/Atoms/Wrapper";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Wrapper className="wrapper--header">
        <LogoLink classNameImage="logo-link__image" className="logo-link--header" href="#" alt="LOGO" ariaLabel="Orange mouse. With the title - Damian Grabowski" src="/logo/logo.png" height={35} width={180}></LogoLink>
        <Navigation></Navigation>
      </Wrapper>
    </header>
  );
};

export default Header;
