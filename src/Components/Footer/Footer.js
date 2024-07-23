import React from "react";
import "./Footer.css";

function Footer(props) {
  const generateAnswerCubes = () => {
    let answerCubesArray = [];
    for (let i = 0; i < props.numberOfQuestions; i++) {
      answerCubesArray.push(<div className="answerCube"></div>);
    }
    return answerCubesArray;
  };
  if (props.gameActive && props.index < props.numberOfQuestions) {
    return (
      <footer>
        <p>
          {props.index + 1}/{props.numberOfQuestions}
        </p>
        <div className="progressBar">{generateAnswerCubes()}</div>
      </footer>
    );
  } else {
    return null;
  }
}

export default Footer;
