import React from "react";
import ResultsMessage from "../ResultsMessage/ResultsMessage";
import QuizAnswers from "../QuizAnswers/QuizAnswers";
import "./Results.css";

function Results(props) {
  return (
    <div className="container">
      <h1>Results of {props.quizTopic} Quiz</h1>
      <ResultsMessage
        correctAnswersCount={props.correctAnswersCount}
        numberOfQuestions={props.numberOfQuestions}
      />
      <button className="btn btn-lg mainButton" onClick={props.noBackToStart}>
        Back to Start
      </button>
      <h2 className="section-header">Correct answers</h2>
      <QuizAnswers allQuestions={props.allQuestions} />
      <a href="#top">Back to Top</a>
    </div>
  );
}

export default Results;
