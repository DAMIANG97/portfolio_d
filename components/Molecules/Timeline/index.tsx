import styles from "./TimeLine.module.scss";

interface TimeLineProps {
  className?: string;
}
const TimeLine: React.FC<TimeLineProps> = ({ className }) => {
  return (
    <div className={styles.timeline}>
      <div className={`${styles.container} ${styles.left}`}>
        <div className={styles.content}>
          <h2>2017</h2>
          <p>Lorem ipsum..</p>
        </div>
      </div>
      <div className={`${styles.container2} ${styles.right}`}>
        <div className={styles.content}>
          <h2>2016</h2>
          <p>Lorem ipsum..</p>
          <div className={styles[`${className}`]}></div>
        </div>
      </div>
      <div className={`${styles.container} ${styles.left}`}>
        <div className={styles.content}>
          <h2>2017</h2>
          <p>Lorem ipsum..</p>
        </div>
      </div>
    </div>
  );
};

export default TimeLine;
