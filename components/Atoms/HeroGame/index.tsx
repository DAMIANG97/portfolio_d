import React from "react";
import styles from "./HeroGame.module.scss";
interface HeroGameProps {
  className?: string;
}

const HeroGame: React.FC<HeroGameProps> = ({ className }) => {
  return (
    <div className={styles.zupka}>
      <iframe className={styles[`${className}`]} src="https://itch.io/embed-upload/12358594?color=333333">
        <a href="https://jacek-jabluszko.itch.io/notebook-puzzles">Play Notebook Puzzles on itch.io</a>
      </iframe>
    </div>
  );
};

export default HeroGame;
