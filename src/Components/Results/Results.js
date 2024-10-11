import React from "react";
import ResultsMessage from "../ResultsMessage/ResultsMessage";
import "./Results.css";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  questionCount,
  quizTopic,
  correctAnswersCount,
  questions,
  resetToInitialState,
} from "../Quiz/QuizSlice";

function Results() {
  const navigate = useNavigate();

  const numberOfCorrectAnswers = useSelector(correctAnswersCount);
  const numberOfQuestions = useSelector(questionCount);
  const quizTitle = useSelector(quizTopic);

  const dispatch = useDispatch();
  function handleBackToHome() {
    navigate("/");
    dispatch(resetToInitialState());
  }

  return (
    <article className="container">
      <h1>
        Results of {quizTitle.charAt(0).toUpperCase() + quizTitle.slice(1)} Quiz
      </h1>
      <ResultsMessage
        correctAnswersCount={numberOfCorrectAnswers}
        numberOfQuestions={numberOfQuestions}
      />
      <button className="btn btn-primary mainButton" onClick={handleBackToHome}>
        Back to Home
      </button>
    </article>
  );
}

export default Results;
