import React from "react";
import styles from "./LogoSection.module.scss";
import LogoLink from "../../Atoms/LogoLink";

interface LogoSectionProps {
  logoLinks: {
    href: string;
    src?: string;
    alt: string;
    width?: number;
    height?: number;
  }[];
}

const LogoSection: React.FC<LogoSectionProps> = ({ logoLinks }) => {
  return (
    <ul className={styles["logo-list"]}>
      {logoLinks.map((logoLinks, index) => (
        <li className={styles["logo-list__li"]} key={index}>
          <LogoLink href={logoLinks.href} alt={logoLinks.alt} src={logoLinks.src} width={logoLinks.width} height={logoLinks.height}></LogoLink>
        </li>
      ))}
    </ul>
  );
};

export default LogoSection;
