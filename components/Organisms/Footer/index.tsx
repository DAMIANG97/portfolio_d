import React from "react";
import styles from "./Footer.module.scss";
import LogoLink from "../../Atoms/LogoLink";
import Link from "../../Atoms/Link";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Link href="/CV_Damian_Grabowski_.pdf" download="CV_Damian_Grabowski_.pdf">
        Pobierz CV
      </Link>
      <Link href="mailto:damiangrabowski975@gmail.com">damiangrabowski975@gmail.com</Link>
      <LogoLink href="https://github.com/DAMIANG97/" src="/logo/github.svg" alt="GitHub"></LogoLink>
      <LogoLink href="https://linkedin.com/in/damiang97/" src="/logo/linkedIn_whiteV.svg" alt="linkedIn"></LogoLink>
      <LogoLink href="https://damiang97.itch.io/" src="/logo/itchio.svg" alt="itch.io" width={128}></LogoLink>
    </footer>
  );
};

export default Footer;
