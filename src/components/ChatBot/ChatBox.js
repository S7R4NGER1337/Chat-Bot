import { useState } from "react";
import styles from "./chatBox.module.css";
import ChatMessage from "./ChatMessage";
import Header from "./Navigation";
import ChatInput from "./ChatInput";
import RelatedQuestions from "./RelatedQuestions";

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
  const [relatedQuestions, setRelatedQuestions] = useState([])

  return (
    <div className={styles.chatBoxContainer}>
      <Header />
      <div className={styles.messagesContainer}>
        {messages.map((message, index) => (
          <ChatMessage text={message.text} type={message.type} key={index}/>
        ))}
      </div>
      <RelatedQuestions options={relatedQuestions}/>
      <ChatInput setMessages={setMessages} setRelatedQuestions={setRelatedQuestions}/>
    </div>
  );
}
