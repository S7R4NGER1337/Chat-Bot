import styles from "./relatedQuestions.module.css";

export default function RelatedQuestions({ options }) {
  return (
    <div className={styles.relatedQuestionsContainer}>
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
