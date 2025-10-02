import styles from "./releatedQuestions.module.css";

export default function ReleatedQuestions({ options }) {
  return (
    <div className={styles.releatedQuestionsContainer}>
      <h1 className={styles.relatedQuestionsTitle}>Related questions</h1>
      <div className={styles.questionsContainer}>
        {options.map((option) => (
          <p className={styles.questionOption} key={option}>
            {option}
          </p>
        ))}
      </div>
    </div>
  );
}
