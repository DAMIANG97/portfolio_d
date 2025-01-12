import React from "react";
import styles from "./LinkSection.module.scss";
import Link from "../../Atoms/Link";

interface LinkSectionProps {
  links: {
    href: string;
    children: React.ReactNode;
    download?: string;
  }[];
}

const LinkSection: React.FC<LinkSectionProps> = ({ links }) => {
  return (
    <ul className={styles["link-list"]}>
      {links.map((link, index) => (
        <li className={styles["link-list__item"]} key={index}>
          <Link className="link--footer" href={link.href} download={link.download}>
            {link.children}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default LinkSection;
