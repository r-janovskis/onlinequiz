import React from "react";
import QuizCard from "../QuizCard/QuizCard";
import "./Quiz.css";

import { useParams, useNavigate } from "react-router-dom";

function Quiz(props) {
  const { quizTopic } = useParams();

  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };
  /*
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
          onClick={props.onEndGame}
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
  */
  return (
    <>
      <h1>{quizTopic.charAt(0).toUpperCase() + quizTopic.slice(1)}</h1>
      <button className="button" onClick={goHome}>
        Go Home
      </button>
    </>
  );
}

export default Quiz;
