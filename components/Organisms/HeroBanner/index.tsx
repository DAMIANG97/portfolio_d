"use client";

import styles from "./HeroBanner.module.scss";
import clsx from "clsx";
import Image from "next/image";
import Greetings from "@/components/Molecules/Greetings";
import { useGlobalContext } from "../../../context/GlobalContext";

const HeroBanner: React.FC = () => {
  const { activeCareer } = useGlobalContext();

  const heroClass = clsx(styles["hero-banner"], {
    [styles["hero-banner--game-dev"]]: activeCareer === "Game development",
    [styles["hero-banner--pixel-art"]]: activeCareer === "Pixel Art",
    [styles["hero-banner--electrical-design"]]: activeCareer === "Electrical designer",
  });

  return (
    <section className={heroClass}>
      <Greetings />
      <Image className={styles["hero-banner__image2"]} alt="Photo of Me" src="/hero/My_Photo.png" width={2000} height={2000} />
    </section>
  );
};

export default HeroBanner;
