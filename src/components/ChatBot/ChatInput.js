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
    const keyWords = message.split(" ");
    const botResponses = [];
    keyWords.forEach((word) => {
      word = word.toLowerCase();
      const response = FAQ.filter((response) =>
        response.question.toLowerCase().includes(word)
      );
      botResponses.push(...response);
    });
    if (botResponses.length > 3) {
      setRelatedQuestions(botResponses.splice(3, botResponses.length - 3));
      return;
    }
    if (botResponses.length === 0) {
      setMessages((prev) => [
        { text: "example@example.com", type: "bot" },
        { text: "You can contact us in your mail.", type: "bot" },
        ...prev,
      ]);
      return;
    }
    if (botResponses.length === 1) {
      setMessages((prev) => [
        { text: "Do you have any other questions ?", type: "bot" },
        { text: botResponses[0].answer, type: "bot" },
        ...prev,
      ]);
      return;
    }
    setRelatedQuestions(botResponses);
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
