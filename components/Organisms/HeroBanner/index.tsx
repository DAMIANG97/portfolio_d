import HeroGame from "@/components/Atoms/HeroGame";
import styles from "./HeroBanner.module.scss";
import Image from "next/image";
import Link from "@/components/Atoms/Link";
import { links } from "@/data/links";

interface HeroProps {
  activeCareer: string;
}

const HeroBanner: React.FC<HeroProps> = ({ activeCareer }) => {
  const srcImage = activeCareer === "Electrical designer" ? "/hero/electric_design.jpg" : activeCareer === "Game development" ? "/hero/gamedev.png" : activeCareer === "Pixel Art" ? "/hero/2.png" : "/hero/weeb.png";

  return (
    <section className={styles["hero-banner"]}>
      {activeCareer === "Game development" ? (
        <HeroGame className="game-container__window" src="https://itch.io/embed-upload/12358594?color=333333"></HeroGame>
      ) : (
        <Image className={styles["hero-banner__image"]} src={srcImage} layout="fill" objectFit="cover" alt="HeroImage"></Image>
      )}
      <div className={styles["hero-banner__content"]}>
        <p className={styles["hero-banner__greetings"]}></p>
        <Image className={styles["hero-banner__image2"]} alt="me" src="/hero/My_Photo.png" width={200} height={400}></Image>
        <p></p>
        <Link href={links[0].href} download={links[0].download}>
          {links[0].children}
        </Link>
      </div>
    </section>
  );
};

export default HeroBanner;
