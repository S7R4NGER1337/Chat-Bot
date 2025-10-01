import styles from "./navigation.module.css";

export default function Navigation() {
  return (
    <div className={styles.navigationContainer}>
      <div className={styles.navigationInfo}>
        <div className={styles.statusDot}></div>
        <p className={styles.navigationTitle}>chat-bot</p>
      </div>
      <div className={styles.navigationActions}>
        <p className={styles.navigationAction}>-</p>
        <p className={styles.navigationAction}>x</p>
      </div>
    </div>
  );
}
