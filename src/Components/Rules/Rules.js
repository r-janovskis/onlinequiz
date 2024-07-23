import React from "react";
import "./Rules.css";

function Rules(props) {
  const startGame = (event) => {
    props.onStartGame(event.target.value);
  };

  return (
    <div className="container">
      <h1>How to play</h1>
      <p className="intro">
        Welcome to Amazing Online Quiz! <br />
        Ready to test your knowledge and have some fun? Dive into our exciting
        quizzes covering some specific topics, from pop culture to science,
        history, and more. Challenge yourself, compete with friends, and see how
        you rank on our leaderboard. Whether you’re a trivia buff or just
        looking for a fun way to pass the time, QuizMaster has something for
        everyone. Let’s get quizzing! Don't forget to check us out time to time,
        since new quizes are on the way!
      </p>
      <p>Instructions how to get best out of the Amazing Online Quiz:</p>
      <ol>
        <li>
          Select a quiz topic by clicking one of the buttons. Each quiz has 10
          questions.
        </li>
        <li>
          You will be presented by a question and your task is to find the
          correct answer.
        </li>
        <li>
          When you have figured out which answer is correct, just click on it
          and we will register your choice.
        </li>
        <li>
          Your answer will be evaluated straight away abd you will see if you
          have selected correctly (it will turn green) or you missed (red color)
        </li>
        <li>
          After you have answered the question press button 'Next Question' to
          go to the next question
        </li>
        <li>
          After the last question you will be presented with an overall summary
          and score to see how well you did.
        </li>
        <li>Good luck & have fun!</li>
      </ol>
      <div className="quizChoices">
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
      </div>
    </div>
  );
}

export default Rules;
