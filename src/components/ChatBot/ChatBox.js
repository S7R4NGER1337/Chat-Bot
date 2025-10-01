import styles from "./chatBox.module.css";
import Header from "./Navigation";

export default function ChatBox() {
  return (
    <div className={styles.chatBoxContainer}>
      <Header />
    </div>
  );
}
