import React from "react";
import styles from "./Footer.module.scss";
import LogoLink from "../../Atoms/LogoLink";
import LinkSection from "@/components/Molecules/LinkSection";
import { logoLinks, links } from "@/public/data/links";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <LinkSection links={links} />

      <div className={styles.right}>
        {logoLinks.map((logo, index) => (
          <LogoLink key={index} href={logo.href} src={logo.src} alt={logo.alt} width={logo.width}></LogoLink>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
