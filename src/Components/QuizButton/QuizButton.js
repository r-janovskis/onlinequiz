import React from "react";
import "./QuizButton.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { startQuiz } from "../Quiz/QuizSlice";

function QuizButton(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const startGame = (event) => {
    dispatch(
      startQuiz({
        quizTopic: event.target.value,
        questionCount: 10,
        quizTopic: event.target.value,
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
