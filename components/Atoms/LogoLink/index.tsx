import React from "react";
import styles from "./LogoLink.module.scss";
import Image from "next/image";

interface LogoLinkProps {
  ariaLabel: string;
  href: string;
  src?: string;
  alt: string;
  width?: number;
  height?: number;
  title?: string;
  className?: string;
}

const LogoLink: React.FC<LogoLinkProps> = ({ href = "#", src = "/logo/github.svg", alt = "Github logo", width = 32, height = 32, ariaLabel, title }) => {
  return (
    <a title={title} aria-label={ariaLabel} className={styles["logo-link"]} href={href} target="_blank" rel="noopener noreferrer">
      <Image src={src} alt={alt} width={width} height={height} />
    </a>
  );
};

export default LogoLink;
