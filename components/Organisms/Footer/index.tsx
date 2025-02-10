import React from "react";
import styles from "./Footer.module.scss";
import LinkSection from "@/components/Molecules/LinkSection";
import { logoLinks, links } from "@/data/links";
import LogoSection from "@/components/Molecules/LogoSection";
import Wrapper from "@/components/Atoms/Wrapper";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Wrapper className="wrapper--footer">
        <LinkSection links={links} />
        <LogoSection logoLinks={logoLinks}></LogoSection>
      </Wrapper>
    </footer>
  );
};

export default Footer;
