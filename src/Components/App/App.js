import React, { useState, useEffect } from "react";
import logo from "../../logo.svg";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Util from "../../Util/Util";

function App() {
  const [gameActive, setGameActive] = useState(false);

  const [questionSequence, setQuestionSequence] = useState([]);

  const [questions, setQuestions] = useState([]);

  function startGame() {
    setQuestionSequence(() => Util.generateSequence());
    setQuestions(() => Util.generateQuiz());
    setGameActive((prev) => (prev ? false : true));
  }

  function endGame() {
    setGameActive((prev) => (prev ? false : true));
  }

  useEffect(() => {
    console.log(`Status questions updated: ${questions.length}`);
    questions.forEach((element) => console.log(element.question));
  }, [questions]);

  return (
    <div className="App">
      <Header />
      <Main
        isGameActive={gameActive}
        onStartGame={startGame}
        onEndGame={endGame}
        questionSequence={questionSequence}
      />
    </div>
  );
}

export default App;
