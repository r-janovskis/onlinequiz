import React from "react";
import QuizCard from "../QuizCard/QuizCard";

function Quiz(props) {
  return (
    <div>
      <h1>Game Board</h1>
      <QuizCard
        question={props.question}
        onAnswerQuestion={props.onAnswerQuestion}
      />
      <p>
        {props.index + 1}/{props.numberOfQuestions}
      </p>
      <button
        id="nextButton"
        className="btn btn-primary btn-large"
        onClick={props.onNextQuestion}
      >
        Next
      </button>
    </div>
  );
}

export default Quiz;
