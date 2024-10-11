import React from "react";
import { useSelector } from "react-redux";
import "./Footer.css";
import { index, quizTopic, questionCount } from "../Quiz/QuizSlice";

function Footer(props) {
  const currentQuestion = useSelector(index);
  const quizTitle = useSelector(quizTopic);
  const numberOfQuestions = useSelector(questionCount);

  if (quizTitle && currentQuestion < numberOfQuestions) {
    return (
      <footer>
        <p>
          {currentQuestion + 1}/{numberOfQuestions}
        </p>
      </footer>
    );
  }
  return null;
}

export default Footer;
