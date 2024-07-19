import React from "react";

function Quiz(props) {
  return (
    <div>
      <h1>Game Board</h1>
      <p>{props.questionSequence.join(" ")}</p>
      <button onClick={props.onEndGame}>Finish!</button>
    </div>
  );
}

export default Quiz;
