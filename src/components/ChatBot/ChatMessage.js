import styles from "./chatMessage.module.css";

export default function ChatMessage({ text, type }) {
  return (
    <p
      className={`${styles.chatMessage} ${
        type === "user" ? styles.userMessage : styles.botMessage
      }`}
    >
      {text}
    </p>
  );
}
