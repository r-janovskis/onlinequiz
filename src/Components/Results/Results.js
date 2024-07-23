import React from "react";
import ResultsMessage from "../ResultsMessage/ResultsMessage";
import "./Results.css";

function Results(props) {
  return (
    <div className="container">
      <h1>Results of {props.quizTopic} Quiz</h1>
      <ResultsMessage
        correctAnswersCount={props.correctAnswersCount}
        numberOfQuestions={props.numberOfQuestions}
      />
      <button className="btn btn-lg mainButton" onClick={props.onEndGame}>
        Back to Start
      </button>
    </div>
  );
}

export default Results;
