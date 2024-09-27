import React from "react";

import { useNavigate } from "react-router-dom";

import "./QuizStart.css";

function QuizStart(props) {
  const navigate = useNavigate();

  function startQuiz() {
    props.updateIndex();

    navigate(props.index + 1);
  }

  return (
    <article>
      <input
        id="numberOfQuesions"
        type="range"
        min="10"
        max={props.maxNumberOfQuestions}
      />
      <button onClick={startQuiz}>Start Quiz</button>
    </article>
  );
}

export default QuizStart;
