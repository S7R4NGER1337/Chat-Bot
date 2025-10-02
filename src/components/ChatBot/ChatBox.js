import { useState } from "react";
import styles from "./chatBox.module.css";
import ChatMessage from "./ChatMessage";
import Header from "./Navigation";
import ChatInput from "./ChatInput";

export default function ChatBox() {
  const [messages, setMessages] = useState([
    {
      text: "Test",
      type: "user",
    },
    {
      text: "Test2",
      type: "bot",
    },
    {
      text: "Test3",
      type: "user",
    },
  ]);

  return (
    <div className={styles.chatBoxContainer}>
      <Header />
      <div className={styles.messagesContainer}>
        {messages.map((message) => (
          <ChatMessage text={message.text} type={message.type} />
        ))}
      </div>
      <ChatInput />
    </div>
  );
}
