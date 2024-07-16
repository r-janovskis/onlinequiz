import React from "react";
import Quiz from "../Quiz/Quiz";
import Rules from "../Rules/Rules";

function Main(props) {
  if (props.isGameActive) {
    return (
      <main>
        <Quiz onGameChange={props.onGameChange} />
      </main>
    );
  } else {
    return (
      <main>
        <Rules onGameChange={props.onGameChange} />
      </main>
    );
  }
}

export default Main;
