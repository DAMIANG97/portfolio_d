import React from "react";
import styles from "../../Atoms/Link/Link.module.scss";
import clsx from "clsx";

interface LinkProps {
  href: string;
  download?: string;
  children?: React.ReactNode;
  className?: string;
}

const Link: React.FC<LinkProps> = ({ href = "#", download, children, className }) => {
  return (
    <a className={clsx(styles["link"], styles[`${className}`])} href={href} download={download}>
      {children}
    </a>
  );
};

export default Link;
