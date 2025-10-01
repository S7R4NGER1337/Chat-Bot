import styles from "./header.module.css";

export default function Header() {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerInfo}>
        <div className={styles.statusDot}></div>
        <p className={styles.headerTitle}>chat-bot</p>
      </div>
      <div className={styles.headerActions}>
        <p className={styles.headerAction}>-</p>
        <p className={styles.headerAction}>x</p>
      </div>
    </div>
  );
}
