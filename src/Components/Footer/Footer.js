import React from "react";
import { useSelector } from "react-redux";
import "./Footer.css";
import { index, quizTopic, questionCount } from "../Quiz/QuizSlice";

function Footer(props) {
  const currentQuestion = useSelector(index);
  const quizTitle = useSelector(quizTopic);
  const numberOfQuestions = useSelector(questionCount);

  const generateAnswerCubes = () => {
    let answerCubesArray = [];
    for (let i = 0; i < props.numberOfQuestions; i++) {
      answerCubesArray.push(
        <div className="answerCube" key={`answerCube${i}`}></div>
      );
    }
    return answerCubesArray;
  };
  if (quizTitle && currentQuestion < numberOfQuestions) {
    return (
      <footer>
        <p>
          {currentQuestion + 1}/{numberOfQuestions}
        </p>
        <div className="progressBar">{generateAnswerCubes()}</div>
      </footer>
    );
  }
  return null;
}

export default Footer;
