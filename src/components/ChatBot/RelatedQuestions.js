import styles from "./relatedQuestions.module.css";

export default function RelatedQuestions({
  options,
  setMessages,
  hideRelatedQuestions,
}) {
  return (
    <div className={styles.relatedQuestionsContainer}>
      <h1 className={styles.relatedQuestionsTitle}>Related questions: </h1>
      <div className={styles.questionsContainer}>
        {options.map((option, index) => (
          <p
            className={styles.questionOption}
            key={index}
            onClick={() => {
              setMessages((prev) => [
                { text: "Do you have any other questions ?", type: "bot" },
                { text: option.answer, type: "bot" },
                { text: option.question, type: 'user'},
                ...prev,
              ]);
              hideRelatedQuestions();
            }}
          >
            {option.question}
          </p>
        ))}
      </div>
    </div>
  );
}
