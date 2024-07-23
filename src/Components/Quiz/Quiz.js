import React from "react";
import QuizCard from "../QuizCard/QuizCard";
import "./Quiz.css";

function Quiz(props) {
  if (props.index + 1 === props.numberOfQuestions) {
    return (
      <div className="container">
        <h1>{props.quizTopic} Quiz</h1>
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
          Finish Quiz
        </button>
      </div>
    );
  }
  return (
    <div className="container">
      <h1>{props.quizTopic} Quiz</h1>
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
