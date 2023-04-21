import styles from "./main.module.css";
import Question from "./Question";

const Main = ({ questions }) => {
  return (
    <div className={styles.body}>
      {questions.map((question, key) => {
        return <Question question={question} q_key={key} key={key} />;
      })}
    </div>
  );
};

export default Main;
