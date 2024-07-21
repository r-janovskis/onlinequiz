import React from "react";
import "./Results.css";

function Results(props) {
  return (
    <div>
      <h1>Results</h1>
      <p>
        You got {props.correctAnswersCount} correct answers out of{" "}
        {props.numberOfQuestions}
      </p>
      <button onClick={props.onEndGame}>Back to Start</button>
    </div>
  );
}

export default Results;
