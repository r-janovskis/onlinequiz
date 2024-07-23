import React from "react";
import Quiz from "../Quiz/Quiz";
import Rules from "../Rules/Rules";
import Results from "../Results/Results";
import "./Main.css";

function Main(props) {
  if (props.isGameActive) {
    if (props.index < props.numberOfQuestions) {
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
          />
        </main>
      );
    } else {
      return (
        <main>
          <Results
            onEndGame={props.onEndGame}
            correctAnswersCount={props.correctAnswersCount}
            numberOfQuestions={props.numberOfQuestions}
            quizTopic={props.quizTopic}
          />
        </main>
      );
    }
  } else {
    return (
      <main>
        <Rules onStartGame={props.onStartGame} />
      </main>
    );
  }
}

export default Main;
