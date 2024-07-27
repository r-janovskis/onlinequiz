import React from "react";
import QuestionAnswer from "../QuestionAswer/QuestionAnswer";
import "./QuizAnswers.css";

function QuizAnswers(props) {
  return (
    <div className="accordion accordion" id="answers">
      {props.allQuestions.map((question, index) => {
        return <QuestionAnswer key={index} index={index} question={question} />;
      })}
    </div>
  );
}

export default QuizAnswers;
