import { useState } from "react";
import styles from "./chatInput.module.css";

export default function ChatInput({ setMessages }) {
  const [message, setMessage] = useState("");

  function sendMessage() {
    if (message === "") return;
    setMessages((prev) => [...prev, { text: message, type: "user" }]);
    setMessage("");
  }

  return (
    <div className={styles.chatInputContainer}>
      <input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        name="message"
        className={styles.chatInput}
        type="text"
        placeholder="Type a message"
      />
      <img
        className={styles.chatInputBtn}
        src="/paper-plane-regular-full.svg"
        alt="sendMessage"
        onClick={sendMessage}
      />
    </div>
  );
}
