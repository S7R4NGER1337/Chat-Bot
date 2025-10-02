import styles from "./navigation.module.css";

export default function Navigation({setStatus}) {
  return (
    <div className={styles.navigationContainer}>
      <div className={styles.navigationInfo}>
        <div className={styles.statusDot}></div>
        <p className={styles.navigationTitle}>chat-bot</p>
      </div>
      <div className={styles.navigationActions}>
        <img className={styles.navigationAction} onClick={() => setStatus('hidden')} src="/minus-solid-full.svg" alt="minimize" />
        <img className={styles.navigationAction} onClick={() => setStatus('removed')} src="/xmark-solid-full.svg" alt="xMark" />
      </div>
    </div>
  );
}
