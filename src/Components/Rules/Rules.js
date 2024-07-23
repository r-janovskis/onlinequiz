import React from "react";

function Rules(props) {
  return (
    <div className="container">
      <h1>How to play</h1>
      <p>Some sample text in default font</p>
      <button className="btn btn-lg mainButton" onClick={props.onStartGame}>
        Start Quiz
      </button>
    </div>
  );
}

export default Rules;
