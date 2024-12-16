import styles from "./heroBanner.module.scss";

interface HeroProps {
  activeCareer: string;
}

const HeroBanner: React.FC<HeroProps> = ({ activeCareer }) => {
  const bannerClass = `${
    activeCareer === "Electrical designer"
      ? styles["hero-banner--electro-design"]
      : activeCareer === "Game development"
      ? styles["hero-banner--game-dev"]
      : activeCareer === "Pixel Art"
      ? styles["hero-banner--pixel-art"]
      : styles["hero-banner"]
  }`;

  return (
    <section className={bannerClass}>
      <div>
        <p className={styles["hero-banner__greetings"]}>Cześć</p>
        <p>Zapraszam do kontaktu</p>
      </div>
    </section>
  );
};

export default HeroBanner;
