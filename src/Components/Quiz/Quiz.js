import React from "react";
import QuizCard from "../QuizCard/QuizCard";

function Quiz(props) {
  return (
    <div>
      <h1>Game Board</h1>
      <QuizCard question={props.question} />
      <p>
        {props.index + 1}/{props.numberOfQuestions}
      </p>
      <button onClick={props.onNextQuestion}>Next</button>
    </div>
  );
}

export default Quiz;
