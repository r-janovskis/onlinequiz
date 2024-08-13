import React from "react";
import "./QuizCard.css";

function QuizCard(props) {
  let correctAnswer;

  function handleClick(event) {
    const buttonClicked = event.target;
    if (buttonClicked.textContent === correctAnswer) {
      buttonClicked.classList.add("correct");
      document
        .getElementsByClassName("answerCube")
        [props.index].classList.add("correctCube");
      props.onCorrectAnswer();
    } else {
      buttonClicked.classList.add("incorrect");
      document
        .getElementsByClassName("answerCube")
        [props.index].classList.add("incorrectCube");
    }

    const answerButtons = document.getElementsByClassName("answerButton");
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
    <article className=" quizCard">
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
    </article>
  );
}

export default QuizCard;
