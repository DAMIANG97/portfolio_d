"use client";

import styles from "./HeroBanner.module.scss";
import clsx from "clsx";
import Image from "next/image";
import Greetings from "@/components/Molecules/Greetings";
import { useGlobalContext } from "../../../context/GlobalContext";
import { careers } from "@/data/careers";

const HeroBanner: React.FC = () => {
  const { activeCareer } = useGlobalContext();

  const activeCareerData = careers.find((career) => career.id === activeCareer);

  const heroClass = clsx(styles["hero-banner"], {
    [styles[`hero-banner--${activeCareerData?.id}`]]: activeCareerData,
  });

  return (
    <section className={heroClass} aria-label={activeCareerData?.description || "Hero Banner"}>
      <Greetings />
      <Image className={styles["hero-banner__image2"]} alt="Photo of Me" src="/hero/My_Photo.png" width={2000} height={2000} />
    </section>
  );
};

export default HeroBanner;
