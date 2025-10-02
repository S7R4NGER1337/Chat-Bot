import { useState } from "react";
import styles from "./chatInput.module.css";
import { FAQ } from "./faq";

export default function ChatInput({ setMessages }) {
  const [message, setMessage] = useState("");

  function sendMessage() {
    if (message === "") return;
    findBotQuestion()
    // setMessages((prev) => [...prev, { text: message, type: "user" }]);
    setMessage("");
  }

  function findBotQuestion() {
    const keyWords = message.split(' ')
    const botResponses = []
    keyWords.forEach(word => {
        word = word.toLowerCase()
        const response = FAQ.filter(response => response.question.includes(word))
        botResponses.push(...response);
    });
    console.log(botResponses);
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
