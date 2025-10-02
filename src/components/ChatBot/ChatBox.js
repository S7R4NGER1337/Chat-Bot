import { useState } from "react";
import styles from "./chatBox.module.css";
import ChatMessage from "./ChatMessage";
import Header from "./Navigation";
import ChatInput from "./ChatInput";
import RelatedQuestions from "./RelatedQuestions";

export default function ChatBox() {
  const [messages, setMessages] = useState([
    {
      text: "Hello how can I help you ?",
      type: "bot",
    }
  ]);
  const [relatedQuestions, setRelatedQuestions] = useState([])

  function hideRelatedQuestions() {
    setRelatedQuestions([])
  }

  return (
    <div className={styles.chatBoxContainer}>
      <Header />
      <div className={styles.messagesContainer}>
        {messages.map((message, index) => (
          <ChatMessage text={message.text} type={message.type} key={index}/>
        ))}
      </div>
      {relatedQuestions.length > 0 && <RelatedQuestions options={relatedQuestions} setMessages={setMessages} hideRelatedQuestions={hideRelatedQuestions}/>}
      <ChatInput setMessages={setMessages} setRelatedQuestions={setRelatedQuestions}/>
    </div>
  );
}
