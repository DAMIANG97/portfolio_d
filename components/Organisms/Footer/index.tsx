import React from "react";
import styles from "./Footer.module.scss";
import LogoLink from "../../Atoms/LogoLink";
import LinkSection from "@/components/Molecules/LinkSection";

const Footer = () => {
  const links = [
    {
      href: "/CV_Damian_Grabowski_.pdf",
      children: "Download CV",
      download: "CV_Damian_Grabowski_.pdf",
    },
    {
      href: "mailto:damiangrabowski975@gmail.com",
      children: "Contact Me",
    },
  ];

  return (
    <footer className={styles.footer}>
      <LinkSection links={links} />

      <div className={styles.prawo}>
        <LogoLink href="https://github.com/DAMIANG97/" src="/logo/github.svg" alt="GitHub" />
        <LogoLink href="https://linkedin.com/in/damiang97/" src="/logo/linkedIn_whiteV.svg" alt="LinkedIn" />
        <LogoLink href="https://damiang97.itch.io/" src="/logo/itchio.svg" alt="itch.io" width={128} />
      </div>
    </footer>
  );
};

export default Footer;
