import React from "react";
import "./QuizCard.css";
import { type } from "@testing-library/user-event/dist/type";

function QuizCard(props) {
  let correctAnswer;

  function handleClick(event) {
    const buttonClicked = event.target;
    //console.log(typeof event.target);
    console.log(buttonClicked.textContent);
    if (buttonClicked.textContent === correctAnswer) {
      buttonClicked.classList.add("correct");
    } else {
      buttonClicked.classList.add("incorrect");
    }

    const answerButtons = document.getElementsByClassName("answerButton");
    //console.log(answerButtons[0]);
    for (let i = 0; i < answerButtons.length; i++) {
      if (
        answerButtons[i].classList.contains("correct") ||
        answerButtons[i].classList.contains("incorrect")
      ) {
        continue;
      }
      answerButtons[i].disabled = true;
    }

    props.onAnswerQuestion();
  }

  return (
    <div className="d-grid gap-6 col-6 mx-auto quizCard">
      <p className="question">{props.question.question}</p>
      {props.question.answers.map((answer, index) => {
        if (answer.correct === true) {
          correctAnswer = answer.answer;
        }
        return (
          <button
            key={index}
            className="btn btn-outline-secondary answerButton"
            onClick={handleClick}
          >
            {answer.answer}
          </button>
        );
      })}
      <p>Correct answer: {correctAnswer}</p>
    </div>
  );
}

export default QuizCard;
