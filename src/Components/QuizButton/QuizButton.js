import React from "react";
import "./QuizButton.css";
import { useNavigate } from "react-router-dom";

function QuizButton(props) {
  const navigate = useNavigate();
  const startGame = (event) => {
    //props.onStartGame(event.target.value);
    navigate(`/${event.target.value}`);
  };

  return (
    <button
      className="btn btn-lg mainButton"
      value={props.quizName}
      onClick={startGame}
    >
      {props.quizName.charAt(0).toUpperCase() + props.quizName.slice(1)} Quiz
    </button>
  );
}

export default QuizButton;
