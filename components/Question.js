import React from "react";
import styles from "./main.module.css";

const Question = ({ question, q_key }) => {
  const [selected_option, set_selected_option] = React.useState();
  const [selected_array, set_selected_array] = React.useState([]);

  return (
    <div key={question.question} className={styles.question_body}>
      <p className={styles.question_title}>{question.question}</p>
      <hr className={styles.question_line} />
      <div className={styles.question_option_body}>
        {question.type === "single-button" ? (
          <div className={styles.question_container}>
            {question.options.map((option, index) => {
              return (
                <div
                  key={`radio${index}`}
                  className={`${styles.question_option} ${
                    index === selected_option ? styles.active_option : ""
                  }`}
                  onClick={() => {
                    return set_selected_option(index);
                  }}
                >
                  <input
                    className={styles.radio_option}
                    type="radio"
                    id={`radio${q_key}`}
                    name={`question${q_key}`}
                    value={option}
                    checked={index === selected_option ? true : false}
                  />
                  {option}
                </div>
              );
            })}
          </div>
        ) : question.type === "multi-button" ? (
          <div className={styles.question_container}>
            {question.options.map((option, index) => {
              const isChecked =
                selected_array.findIndex((item) => {
                  return item === index;
                }) > -1
                  ? true
                  : false;
              return (
                <div
                  key={`check${index}`}
                  className={`${styles.question_option} ${
                    isChecked ? styles.active_option : ""
                  }`}
                  onClick={() => {
                    return set_selected_array((prev_state) => {
                      if (!isChecked) {
                        return [...prev_state, index];
                      } else {
                        return prev_state.filter((item) => {
                          return item !== index;
                        });
                      }
                    });
                  }}
                >
                  <input
                    className={styles.checkbox_option}
                    type="checkbox"
                    id={`check${q_key}`}
                    name={`question${q_key}`}
                    value={option}
                    checked={isChecked}
                  />
                  {option}
                </div>
              );
            })}
          </div>
        ) : question.type === "form" ? (
          <div className={styles.question_container}>
            <textarea className={styles.textareaStyle}></textarea>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Question;
