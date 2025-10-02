import { useState } from "react";
import styles from "./chatInput.module.css";

export default function ChatInput() {
    const [message, setMessage] = useState('')

  return (
    <div className={styles.chatInputContainer}>
      <input value={message} onChange={(e) => setMessage(e.target.value)} name="message" className={styles.chatInput} type="text" placeholder="Type a message" />
      <img className={styles.chatInputBtn}  src="/paper-plane-regular-full.svg" alt="sendMessage" />
    </div>
  );
}
