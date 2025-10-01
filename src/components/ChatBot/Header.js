import styles from "./header.module.css";

export default function Header() {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.statusDot}></div>
      <div className={styles.headerActions}>
        <p className={styles.headerAction}>-</p>
        <p className={styles.headerAction}>x</p>
      </div>
    </div>
  );
}
