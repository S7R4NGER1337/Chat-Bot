import styles from "./chatInput.module.css";

export default function ChatInput() {
  return (
    <div className={styles.chatInputContainer}>
      <input type="text" placeholder="Type a message" />
      <img src="/paper-plane-solid-full.svg" alt="sendMessage" />
    </div>
  );
}
