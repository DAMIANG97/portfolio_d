import Wrapper from "@/components/Atoms/Wrapper";
import styles from "./MainContent.module.scss";

const MainContent: React.FC = () => {
  return (
    <main className={styles.main}>
      <Wrapper className="wrapper--main-content">
        <section className={styles["main__professional-summary"]}></section>
        <section className={styles["main__exp-section"]}>
          <p>z</p>
          <p>z</p>
          <p>z</p>
          <p>z</p>
          <p>z</p>
          <p>z</p>
          <p>z</p>
          <p>z</p>
          <p>z</p>
          <p>z</p>
        </section>
        <section className={styles["main__exp-section"]}>
          <p>z</p>
          <p>z</p>
          <p>z</p>
          <p>z</p>
          <p>z</p>
          <p>z</p>
          <p>z</p>
          <p>z</p>
          <p>z</p>
          <p>z</p>
        </section>
      </Wrapper>
    </main>
  );
};

export default MainContent;
