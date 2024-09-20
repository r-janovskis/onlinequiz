import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Util from "../../Util/Util";
import Footer from "../Footer/Footer";
import Root from "../Root/Root";
import Rules from "../Rules/Rules";
import Home from "../Home/Home";

import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="/" element={<Home quizOptions />} />
      <Route path="/rules" element={<Rules />} />
    </Route>
  )
);

function App() {
  /*
  We will use gameStatus values:
  - active -> quiz is being played
  - preparation -> start screen where rules are isplayed and we chose which game we play
  - finished -> game is done, we are on results screen and can click through the cards to see our answer and correct ones if we answered incorrectly
  */
  const [gameStatus, setGameStatus] = useState("preparation");
  // const [quizTopic, setQuizTopic] = useState("");

  const [questions, setQuestions] = useState([]);

  const [index, setIndex] = useState(null);

  const [numberOfQuestions, setNumberOfQuestions] = useState(10);
  const [correctAnswers, setCorrectAnswers] = useState(0);

  // function startGame(quizTopic) {
  //   setQuizTopic(quizTopic);
  //   setQuestions(() => Util.generateQuiz(numberOfQuestions, quizTopic));
  //   setGameStatus("active");
  //   setIndex(0);
  // }

  function nextQuestion() {
    setIndex((prev) => prev + 1);
    document.getElementById("nextButton").style.display = "none";
    const answerButtons = document.getElementsByClassName("answerButton");
    for (let i = 0; i < answerButtons.length; i++) {
      answerButtons[i].disabled = false;
      answerButtons[i].classList.remove("correct", "incorrect");
    }
  }

  function endGame() {
    setGameStatus("finished");
  }

  function backToStart() {
    setQuizTopic("");
    setGameStatus("preparation");
    setCorrectAnswers(0);
  }

  function updateCorrectAnswerCount() {
    setCorrectAnswers((prev) => prev + 1);
  }

  function answerQuestion() {
    document.getElementById("nextButton").style.display = "block";
  }

  return (
    <RouterProvider router={appRouter} />
    // <div className="App">
    //   <Header />
    //   <Main
    //     gameStatus={gameStatus}
    //     onStartGame={startGame}
    //     onNextQuestion={nextQuestion}
    //     onEndGame={endGame}
    //     index={index}
    //     numberOfQuestions={numberOfQuestions}
    //     question={questions[index]}
    //     allQuestions={questions}
    //     onAnswerQuestion={answerQuestion}
    //     onCorrectAnswer={updateCorrectAnswerCount}
    //     correctAnswersCount={correctAnswers}
    //     quizTopic={quizTopic}
    //     noBackToStart={backToStart}
    //   />

    //   <Footer
    //     index={index}
    //     numberOfQuestions={numberOfQuestions}
    //     gameStatus={gameStatus}
    //   />
    // </div>
  );
}

export default App;
