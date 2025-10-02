import styles from "./chatBox.module.css";
import ChatMessage from "./ChatMessage";
import Header from "./Navigation";

export default function ChatBox() {
  return (
    <div className={styles.chatBoxContainer}>
      <Header />
      <div className={styles.messagesContainer}>
        <ChatMessage text={'Test'} type={'user'}/>
        <ChatMessage text={'Test2'} type={'bot'}/>
        <ChatMessage text={'Test2'} type={'user'}/>
      </div>
    </div>
  );
}
