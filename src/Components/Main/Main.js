import React from "react";
import Quiz from "../Quiz/Quiz";
import Rules from "../Rules/Rules";
import Results from "../Results/Results";
import "./Main.css";

function Main(props) {
  if (props.gameStatus === "active") {
    return (
      <main>
        <Quiz
          onNextQuestion={props.onNextQuestion}
          index={props.index}
          numberOfQuestions={props.numberOfQuestions}
          question={props.question}
          onAnswerQuestion={props.onAnswerQuestion}
          onCorrectAnswer={props.onCorrectAnswer}
          quizTopic={props.quizTopic}
          onEndGame={props.onEndGame}
        />
      </main>
    );
  } else if (props.gameStatus === "finished") {
    return (
      <main>
        <Results
          noBackToStart={props.noBackToStart}
          correctAnswersCount={props.correctAnswersCount}
          numberOfQuestions={props.numberOfQuestions}
          quizTopic={props.quizTopic}
          allQuestions={props.allQuestions}
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
