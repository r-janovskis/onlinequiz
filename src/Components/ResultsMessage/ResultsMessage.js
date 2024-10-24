import React from "react";
import "./ResultsMessage.css";

function ResultsMessage(props) {
  if (props.correctAnswersCount === props.numberOfQuestions) {
    return (
      <article>
        <h2 className="section-header">Unbelievable, you're a guru!</h2>
        <p className="strong">
          Your score:{" "}
          {Math.round(
            (props.correctAnswersCount / props.numberOfQuestions) * 100
          )}
          %
        </p>
        <p>
          You have a flawless knowledge about the topic! Now you can cofidently
          brag about it to your friends!
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
        <h2>Congratulations, you got a great score!</h2>
        <p className="strong">
          Your score:{" "}
          {Math.round(
            (props.correctAnswersCount / props.numberOfQuestions) * 100
          )}
          %
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
          Your score:{" "}
          {Math.round(
            (props.correctAnswersCount / props.numberOfQuestions) * 100
          )}
          %
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
          Your score:{" "}
          {Math.round(
            (props.correctAnswersCount / props.numberOfQuestions) * 100
          )}
          %
        </p>
        <p>
          Give yourself a pat on the back, this was a tough one! But at least
          now you know where your knowledge might be lacking so you can address
          the blind spots. After you have done some research, we would encourage
          you to try again!
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
