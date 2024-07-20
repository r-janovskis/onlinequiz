import React from "react";
import "./QuizCard.css";

function QuizCard(props) {
  let correctAnswer;

  return (
    <div className="task">
      <p className="question">{props.question.question}</p>
      {props.question.answers.map((answer, index) => {
        if (answer.correct === true) {
          correctAnswer = answer.answer;
        }
        return (
          <div key={index}>
            <p className="answer">{answer.answer}</p>
          </div>
        );
      })}
      <p>Correct answer: {correctAnswer}</p>
    </div>
  );
}

export default QuizCard;
