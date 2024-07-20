import React, { useState, useEffect } from "react";
import logo from "../../logo.svg";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Util from "../../Util/Util";

function App() {
  const [gameActive, setGameActive] = useState(false);

  const [questions, setQuestions] = useState([]);

  const [index, setIndex] = useState(null);

  const [numberOfQuestions, setNumberOfQuestions] = useState(5);

  function startGame() {
    //setQuestionSequence(() => Util.generateSequence());
    setQuestions(() => Util.generateQuiz(numberOfQuestions));
    setGameActive((prev) => (prev ? false : true));
    setIndex(0);
  }

  function nextQuestion() {
    setIndex((prev) => prev + 1);
  }

  function endGame() {
    setGameActive((prev) => (prev ? false : true));
  }
  /*
  useEffect(() => {
    console.log(`Status questions updated: ${questions.length}`);
    questions.forEach((element) => console.log(element.question));
  }, [questions]);
*/
  return (
    <div className="App">
      <Header />
      <Main
        isGameActive={gameActive}
        onStartGame={startGame}
        onNextQuestion={nextQuestion}
        onEndGame={endGame}
        index={index}
        numberOfQuestions={numberOfQuestions}
        question={questions[index]}
      />
    </div>
  );
}

export default App;
