import React from "react";

function QuizPicker(props) {
  const startGame = (event) => {
    props.onStartGame(event.target.value);
  };

  return (
    <section className="quizChoices">
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
      <button
        className="btn btn-lg mainButton"
        value="Sports"
        onClick={startGame}
      >
        Sports Quiz
      </button>
    </section>
  );
}

export default QuizPicker;
