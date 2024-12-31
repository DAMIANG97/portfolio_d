import styles from "./HeroBanner.module.scss";
import Image from "next/image";
import Greetings from "@/components/Molecules/Greetings";

interface HeroProps {
  activeCareer: string;
}

const HeroBanner: React.FC<HeroProps> = ({ activeCareer }) => {
  const srcImage = activeCareer === "Electrical designer" ? "/hero/electric_design.jpg" : activeCareer === "Game development" ? "/hero/gamedev.jpg" : activeCareer === "Pixel Art" ? "/hero/2.png" : "/hero/weeb.png";

  return (
    <section style={{ backgroundImage: `url(${srcImage})` }} className={styles["hero-banner"]}>
      <Greetings></Greetings>
      <Image className={styles["hero-banner__image2"]} alt="Photo of Me" src="/hero/My_Photo.png" width={2000} height={2000}></Image>
    </section>
  );
};

export default HeroBanner;
