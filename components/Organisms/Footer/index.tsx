import React from "react";
import styles from "./Footer.module.scss";
import LinkSection from "@/components/Molecules/LinkSection";
import { logoLinks, links } from "@/public/data/links";
import LogoSection from "@/components/Molecules/LogoSection";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <LinkSection links={links} />
      <LogoSection logoLinks={logoLinks}></LogoSection>
    </footer>
  );
};

export default Footer;
