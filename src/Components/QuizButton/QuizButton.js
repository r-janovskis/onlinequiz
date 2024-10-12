import React from "react";
import "./QuizButton.css";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { questionCount, quizTopic, startQuiz } from "../Quiz/QuizSlice";

function QuizButton(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const startGame = (event) => {
    const numberOfQuestions = Number(
      document.getElementById("displayNumberOfQuestions").innerHTML
    );
    dispatch(
      startQuiz({
        quizTopic: event.target.value,
        questionCount: numberOfQuestions,
      })
    );
    navigate(`/${event.target.value}/1`);
    props.onStartGame();
  };

  return (
    <button
      className="btn btn-primary"
      value={props.quizName}
      onClick={startGame}
    >
      {props.quizName.charAt(0).toUpperCase() + props.quizName.slice(1)} Quiz
    </button>
  );
}

export default QuizButton;
