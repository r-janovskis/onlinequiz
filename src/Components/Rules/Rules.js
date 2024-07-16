import React from "react";

function Rules(props) {
  return (
    <div>
      <h1>How to play</h1>
      <p>Some sample text in default font</p>
      <button onClick={props.onGameChange}> Change State </button>
    </div>
  );
}

export default Rules;
