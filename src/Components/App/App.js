import React, { useState, useEffect } from "react";
import logo from "../../logo.svg";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Util from "../../Util/Util";
import Footer from "../Footer/Footer";

function App() {
  const [gameActive, setGameActive] = useState(false);

  const [questions, setQuestions] = useState([]);

  const [index, setIndex] = useState(null);

  const [numberOfQuestions, setNumberOfQuestions] = useState(5);
  const [correctAnswers, setCorrectAnswers] = useState(0);

  function startGame() {
    //setQuestionSequence(() => Util.generateSequence());
    setQuestions(() => Util.generateQuiz(numberOfQuestions));
    setGameActive((prev) => (prev ? false : true));
    setIndex(0);
  }

  function nextQuestion() {
    setIndex((prev) => prev + 1);
    document.getElementById("nextButton").style.display = "none";
    const answerButtons = document.getElementsByClassName("answerButton");
    //console.log(answerButtons[0]);
    for (let i = 0; i < answerButtons.length; i++) {
      answerButtons[i].disabled = false;
      answerButtons[i].classList.remove("correct", "incorrect");
    }
  }

  function endGame() {
    setGameActive((prev) => (prev ? false : true));
    setCorrectAnswers(0);
  }

  function updateCorrectAnswerCount() {
    setCorrectAnswers((prev) => prev + 1);
  }

  //const [questionAnswered, setQuestionAnswered] = useState(false);

  function answerQuestion() {
    //setQuestionAnswered((prev) => (prev ? false : true));
    document.getElementById("nextButton").style.display = "block";
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
        onAnswerQuestion={answerQuestion}
        onCorrectAnswer={updateCorrectAnswerCount}
        correctAnswersCount={correctAnswers}
      />

      <Footer
        index={index}
        numberOfQuestions={numberOfQuestions}
        gameActive={gameActive}
      />
    </div>
  );
}

export default App;
