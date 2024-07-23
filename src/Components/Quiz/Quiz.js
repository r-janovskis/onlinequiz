import React from "react";
import QuizCard from "../QuizCard/QuizCard";
import "./Quiz.css";

function Quiz(props) {
  return (
    <div className="container">
      <h1>Game Board</h1>
      <QuizCard
        question={props.question}
        onAnswerQuestion={props.onAnswerQuestion}
        onCorrectAnswer={props.onCorrectAnswer}
        index={props.index}
      />
      <button
        id="nextButton"
        className="btn btn-lg mainButton"
        onClick={props.onNextQuestion}
      >
        Next
      </button>
    </div>
  );
}

export default Quiz;
