"use client";

import React from "react";
import { useCursorClass } from "../../../hooks/useCursorClass";
import { useGlobalContext } from "../../../context/GlobalContext";
import styles from "./GlobalWrapper.module.scss";

type GlobalWrapperProps = {
  children: React.ReactNode;
};

export default function GlobalWrapper({ children }: GlobalWrapperProps) {
  const { activeCareer } = useGlobalContext();
  const cursorClass = useCursorClass(activeCareer);

  return <div className={`${styles.globalWrapper} ${styles[cursorClass]}`}>{children}</div>;
}
