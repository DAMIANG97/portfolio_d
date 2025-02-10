import React from "react";
import styles from "../Wrapper/Wrapper.module.scss";
import clsx from "clsx";
type WrapperProps = {
  children: React.ReactNode;
  className?: string;
};

const Wrapper: React.FC<WrapperProps> = ({ children, className }) => {
  return <div className={clsx(styles["wrapper"], styles[`${className}`])}>{children}</div>;
};

export default Wrapper;
