import React from "react";
import Quiz from "../Quiz/Quiz";
import Rules from "../Rules/Rules";

function Main(props) {
  if (props.isGameActive) {
    return (
      <main>
        <Quiz
          onEndGame={props.onEndGame}
          questionSequence={props.questionSequence}
        />
      </main>
    );
  } else {
    return (
      <main>
        <Rules onStartGame={props.onStartGame} />
      </main>
    );
  }
}

export default Main;
