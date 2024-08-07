import React from "react";
import "./Rules.css";

function Rules(props) {
  const startGame = (event) => {
    props.onStartGame(event.target.value);
  };

  return (
    <article className="container">
      <h1>How to play</h1>
      <p className="intro">
        <strong>Welcome to Amazing Online Quiz!</strong> <br />
        Ready to test your knowledge and have some fun? Dive into our exciting
        quizzes covering some specific topics, from pop culture to science,
        history, and more. Challenge yourself, compete with friends, and see how
        you rank on our leaderboard. Whether you’re a trivia buff or just
        looking for a fun way to pass the time, QuizMaster has something for
        everyone. Let’s get quizzing! Don't forget to check us out time to time,
        since new quizes are on the way!
      </p>
      <p>How to play the Amazing Online Quiz:</p>
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
    </article>
  );
}

export default Rules;
