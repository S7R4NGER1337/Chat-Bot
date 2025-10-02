import { useState } from "react";
import styles from "./chatInput.module.css";
import { FAQ } from "./faq";

export default function ChatInput({ setMessages, setRelatedQuestions }) {
  const [message, setMessage] = useState("");

  function sendMessage() {
    if (message === "") return;
    setMessages((prev) => [{ text: message, type: "user" }, ...prev]);
    findBotQuestion();
    setMessage("");
  }
function findBotQuestion() {
  const keyWords = message.toLowerCase().split(" ");
  const scored = FAQ.map((faq) => {
    let score = 0;
    keyWords.forEach((word) => {
      if (faq.question.toLowerCase().includes(word)) {
        score++;
      }
    });
    return { ...faq, score };
  }).filter((faq) => faq.score > 0);
  scored.sort((a, b) => b.score - a.score);
  
  if (scored.length === 0) {
    setMessages((prev) => [
      { text: "example@example.com", type: "bot" },
      { text: "You can contact us in your mail.", type: "bot" },
      ...prev,
    ]);
    return;
  }

  if (scored.length === 1) {
    setMessages((prev) => [
      { text: "Do you have any other questions ?", type: "bot" },
      { text: scored[0].answer, type: "bot" },
      ...prev,
    ]);
    return;
  }

  const topMatches = scored.slice(0, 3);
  setRelatedQuestions(topMatches);
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
