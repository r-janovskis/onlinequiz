import React from "react";

function Quiz(props) {
  return (
    <div>
      <h1>Game Board</h1>
      <button onClick={props.onGameChange}> Change State </button>
    </div>
  );
}

export default Quiz;
