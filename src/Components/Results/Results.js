import React from "react";
import ResultsMessage from "../ResultsMessage/ResultsMessage";
import QuizAnswers from "../QuizAnswers/QuizAnswers";
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

function Results(props) {
  const navigate = useNavigate();

  const numberOfCorrectAnswers = useSelector(correctAnswersCount);
  const numberOfQuestions = useSelector(questionCount);
  const quizTitle = useSelector(quizTopic);
  const allQuestions = useSelector(questions);

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
      <button className="btn btn-lg mainButton" onClick={handleBackToHome}>
        Back to Home
      </button>
      <section>
        <h2 className="section-header">Correct answers</h2>
        <QuizAnswers allQuestions={allQuestions} />
      </section>
      <a href="#top">Back to Top</a>
    </article>
  );
}

export default Results;
