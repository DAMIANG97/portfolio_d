import Wrapper from "@/components/Atoms/Wrapper";
import styles from "./MainContent.module.scss";
import TextField from "@/components/Atoms/TextField";

const MainContent: React.FC = () => {
  return (
    <main className={styles.main}>
      <Wrapper className="wrapper--main-content">
        <section className={styles["main__professional-summary"]}>
          <TextField className="text-field"></TextField>
          <TextField className="text-field"></TextField>
        </section>
      </Wrapper>
    </main>
  );
};

export default MainContent;
