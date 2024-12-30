import styles from "./HeroBanner.module.scss";
import Image from "next/image";
import Link from "@/components/Atoms/Link";
import { links } from "@/data/links";

interface HeroProps {
  activeCareer: string;
}

const HeroBanner: React.FC<HeroProps> = ({ activeCareer }) => {
  const srcImage = activeCareer === "Electrical designer" ? "/hero/electric_design.jpg" : activeCareer === "Game development" ? "/hero/gamedev.jpg" : activeCareer === "Pixel Art" ? "/hero/2.png" : "/hero/weeb.png";

  return (
    <section style={{ backgroundImage: `url(${srcImage})` }} className={styles["hero-banner"]}>
      <div className={styles["hero-banner__content"]}>
        <p className={styles["hero-banner__greetings"]}>siema</p>
        <p>siema</p>
        <Link href={links[0].href} download={links[0].download}>
          {links[0].children}
        </Link>
      </div>
      <Image className={styles["hero-banner__image2"]} alt="me" src="/hero/My_Photo.png" width={200} height={400}></Image>
    </section>
  );
};

export default HeroBanner;
