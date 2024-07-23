import React from "react";
import "./Rules.css";

function Rules(props) {
  const startGame = (event) => {
    props.onStartGame(event.target.value);
  };

  return (
    <div className="container">
      <h1>How to play</h1>
      <ol>
        <li>Select a quiz topic by clicking one of the buttons.</li>
        <li>Select one of the answers by clicking on it</li>
        <li>Have Fun!</li>
      </ol>
      <div className="quizChoices">
        <button
          className="btn btn-lg mainButton"
          value="Geography"
          onClick={startGame}
        >
          Geography Quiz
        </button>
        <button
          className="btn btn-lg mainButton"
          value="Disney"
          onClick={startGame}
        >
          Disney Quiz
        </button>
      </div>
    </div>
  );
}

export default Rules;
