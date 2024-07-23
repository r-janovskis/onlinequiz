import React from "react";
import "./ResultsMessage.css";

function ResultsMessage(props) {
  if (props.correctAnswersCount === props.numberOfQuestions) {
    return (
      <article>
        <h2>Unbelievable, you're a guru!</h2>
        <p className="strong">
          Your score: {props.correctAnswersCount}/{props.numberOfQuestions}
        </p>
        <p>
          You have a flawless knowledge about the topic! Now you can brag about
          it to all of your friends!
        </p>
        <p>
          If you would like to test your knowledge in other Amazing Online
          Quizzes, click the button below.
        </p>
      </article>
    );
  } else if (props.correctAnswersCount / props.numberOfQuestions >= 0.8) {
    return (
      <article>
        <h2>Congratulations, you did great!</h2>
        <p className="strong">
          Your score: {props.correctAnswersCount}/{props.numberOfQuestions}
        </p>
        <p>
          You have a good knowledge about the topic, but there is still some
          room for improvement. Feel free to refresh your knowledge and try
          again!
        </p>
        <p>
          If you would like to test your knowledge in other Amazing Online
          Quizzes, click the button below.
        </p>
      </article>
    );
  } else if (props.correctAnswersCount / props.numberOfQuestions >= 0.5) {
    return (
      <article>
        <h2>Well done, you did pretty good!</h2>
        <p className="strong">
          Your score: {props.correctAnswersCount}/{props.numberOfQuestions}
        </p>
        <p>
          You have a decent knowledge about the topic, but there is plenty of
          room for improvement. We would encourage you to do some reading on the
          topic and try again!
        </p>
        <p>
          If you would like to test your knowledge in other Amazing Online
          Quizzes, click the button below.
        </p>
      </article>
    );
  } else {
    return (
      <article>
        <h2>Ohh boy, that didn't go as planned, ehh?!</h2>
        <p className="strong">
          Your score: {props.correctAnswersCount}/{props.numberOfQuestions}
        </p>
        <p>
          Give yoursel a pat on the back, this was a tough one! But at least now
          you know where your knowledge might be lacking so you can address the
          blind spots. After you have done some research on the topic, we would
          encourage you to try again!
        </p>
        <p>
          If you would like to test your knowledge in other Amazing Online
          Quizzes, click the button below.
        </p>
      </article>
    );
  }
}

export default ResultsMessage;
