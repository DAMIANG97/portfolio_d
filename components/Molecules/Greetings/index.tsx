import styles from "./Greetings.module.scss";
import Link from "@/components/Atoms/Link";
import { links } from "@/data/links";

const Greetings: React.FC = () => {
  return (
    <div className={styles["greetings"]}>
      <p className={styles["greetings__hello"]}>Hello</p>
      <h1 className={styles["greetings__my-name"]}>
        I am <span className={styles["greetings__name"]}>Damian</span>
      </h1>
      <h2 className={styles["greetings__developer"]}>Frontend developer</h2>
      <Link className="link--hero" href={links[0].href} download={links[0].download}>
        {links[0].children}
      </Link>
    </div>
  );
};

export default Greetings;
