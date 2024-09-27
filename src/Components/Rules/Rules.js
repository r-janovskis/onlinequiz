import React from "react";
import "./Rules.css";

function Rules(props) {
  return (
    <article className="container">
      <h1>How to play</h1>
      <ol>
        <li>
          To start a game, select a topic by clicking one of the buttons below.
          questions. Each quiz will contain 10 questions.
        </li>
        <li>
          Questions will be presented one by one with no chance to go back to
          change your answer, so consider your answer carefully. When you have
          picked an answer you think is correct just click on it.
        </li>
        <li>
          When you have picked an answer we will let you know if it was correct
          (green) or not (red).
        </li>
        <li>To continue to the next question click on 'Next Question'.</li>

        <li>
          After you have completed all 10 questions we will present you with a
          summary and a chance to see correct answers to all questions.
        </li>
        <li>Best of luck & have fun!</li>
      </ol>
    </article>
  );
}

export default Rules;
