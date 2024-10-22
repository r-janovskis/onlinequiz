import React from "react";
import "./QuizButton.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchQuestions } from "../Quiz/QuizSlice";

function QuizButton(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const startGame = (event) => {
    const numberOfQuestions = Number(
      document.getElementById("displayNumberOfQuestions").innerHTML
    );
    dispatch(
      fetchQuestions({
        quizTopic: event.target.value,
        questionCount: numberOfQuestions,
      })
    );
    navigate(`/${event.target.value}/1`);
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
