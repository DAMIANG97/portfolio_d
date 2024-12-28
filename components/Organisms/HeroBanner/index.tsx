import HeroGame from "@/components/Atoms/HeroGame";
import styles from "./HeroBanner.module.scss";
import Image from "next/image";

interface HeroProps {
  activeCareer: string;
}

const HeroBanner: React.FC<HeroProps> = ({ activeCareer }) => {
  const srcImage = activeCareer === "Electrical designer" ? "/hero/electric_design.jpg" : activeCareer === "Game development" ? "/hero/gamedev.png" : activeCareer === "Pixel Art" ? "/hero/2.png" : "/hero/weeb.png";

  return (
    <section className={styles["hero-banner"]}>
      {activeCareer === "Game development" ? <HeroGame className="game-window"></HeroGame> : <Image className={styles["hero-banner__image"]} src={srcImage} layout="fill" objectFit="cover" alt="Picture of the author"></Image>}
      <div className={styles["hero-banner__content"]}>
        <p className={styles["hero-banner__greetings"]}></p>
        <p></p>
      </div>
    </section>
  );
};

export default HeroBanner;
