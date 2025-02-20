import Wrapper from "@/components/Atoms/Wrapper";
import styles from "./MainContent.module.scss";
import TextField from "@/components/Atoms/TextField";
import { careersSummary } from "@/data/careersSummary";

const MainContent: React.FC = () => {
  const webDevCareer = careersSummary.find((career) => career.id === "web-dev");

  return (
    <main className={styles.main}>
      <Wrapper className="wrapper--main-content">
        <section className={styles["main__professional-summary"]}>
          {webDevCareer && (
            <>
              <TextField className="text-field" title={webDevCareer.education.title} description={webDevCareer.education.description} />
              <TextField className="text-field" title={webDevCareer.experience.title} description={webDevCareer.experience.description} />
            </>
          )}
        </section>
      </Wrapper>
    </main>
  );
};

export default MainContent;
