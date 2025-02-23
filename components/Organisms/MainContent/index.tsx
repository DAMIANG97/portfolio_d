"use client";

import Wrapper from "@/components/Atoms/Wrapper";
import styles from "./MainContent.module.scss";
import TextField from "@/components/Atoms/TextField";
import { useGlobalContext } from "../../../context/GlobalContext";
import { careersSummary } from "@/data/careersSummary";

const MainContent: React.FC = () => {
  const { activeCareer } = useGlobalContext();

  const activeCareerData = careersSummary.find((career) => career.id === activeCareer);

  return (
    <main className={styles.main}>
      <Wrapper className="wrapper--main-content">
        <section className={styles["main__professional-summary"]}>
          {activeCareerData && (
            <>
              <TextField className="text-field" title={activeCareerData.education.title} description={activeCareerData.education.description} />
              <TextField className="text-field" title={activeCareerData.experience.title} description={activeCareerData.experience.description} />
            </>
          )}
        </section>
      </Wrapper>
    </main>
  );
};

export default MainContent;
