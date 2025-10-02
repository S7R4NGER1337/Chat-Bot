import styles from "./chatInput.module.css";

export default function ChatInput() {
  return (
    <div className={styles.chatInputContainer}>
      <input name="message" className={styles.chatInput} type="text" placeholder="Type a message" />
      <img className={styles.chatInputBtn}  src="/paper-plane-regular-full.svg" alt="sendMessage" />
    </div>
  );
}
