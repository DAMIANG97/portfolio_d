import React from "react";
import styles from "./HeroGame.module.scss";
interface HeroGameProps {
  className?: string;
  src?: string;
}

const HeroGame: React.FC<HeroGameProps> = ({ className, src }) => {
  return (
    <div className={styles["game-container"]}>
      <iframe className={styles[`${className}`]} src={src}></iframe>
    </div>
  );
};

export default HeroGame;
