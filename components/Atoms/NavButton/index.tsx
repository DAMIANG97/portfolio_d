import React from "react";
import styles from "./NavButton.module.scss";

interface NavButton {
  id: string;
  name: string;
  onClick: (id: string) => void;
}

const NavButton: React.FC<NavButton> = ({ id, name, onClick }) => {
  return (
    <button key={id} onClick={() => onClick(id)} className={styles.NavButton}>
      {name}
    </button>
  );
};

export default NavButton;
