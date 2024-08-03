import React, { useState, useEffect } from "react";
import logo from "../../logo.svg";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Util from "../../Util/Util";
import Footer from "../Footer/Footer";

function App() {
  /*
  We will use game Statuses:
  - active -> quiz is being played
  - preparation -> start screen where rules are isplayed and we chose which game we play
  - finished -> game is done, we are on results screen and can click through the cards to see our answer and correct ones if we answered incorrectly
  */
  const [gameStatus, setGameStatus] = useState("preparation");
  const [quizTopic, setQuizTopic] = useState("");
  const [questions, setQuestions] = useState([]);

  const [index, setIndex] = useState(null);

  const [numberOfQuestions, setNumberOfQuestions] = useState(10);
  const [correctAnswers, setCorrectAnswers] = useState(0);

  function startGame(quizTopic) {
    //setQuestionSequence(() => Util.generateSequence());
    setQuizTopic(quizTopic);
    setQuestions(() => Util.generateQuiz(numberOfQuestions, quizTopic));
    setGameStatus("active");
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
    //setQuizTopic("");
    setGameStatus("finished");
    //setCorrectAnswers(0);
  }

  function backToStart() {
    setQuizTopic("");
    setGameStatus("preparation");
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

  useEffect(() => {
    if (gameStatus === "active") {
      document.getElementsByClassName("container")[0].style.marginBottom =
        "1rem";
    } else {
      document.getElementsByClassName("container")[0].style.marginBottom =
        "5rem";
    }

    const root = document.getElementById("root");
    switch (gameStatus) {
      case "active":
        root.style.backgroundImage = "url(./class.jpg)";
        document.getElementsByClassName("container")[0].style.marginBottom =
          "1rem";
        break;
      case "finished":
        root.style.backgroundImage = "url(./wooden-wall.jpg)";
        document.getElementsByClassName("container")[0].style.marginBottom =
          "5rem";
        break;
      default:
        root.style.backgroundImage = "url(./disney.jpg)";
        document.getElementsByClassName("container")[0].style.marginBottom =
          "5rem";
        break;
    }
  }, [gameStatus, quizTopic]);

  return (
    <div className="App">
      <Header />
      <Main
        gameStatus={gameStatus}
        onStartGame={startGame}
        onNextQuestion={nextQuestion}
        onEndGame={endGame}
        index={index}
        numberOfQuestions={numberOfQuestions}
        question={questions[index]}
        allQuestions={questions}
        onAnswerQuestion={answerQuestion}
        onCorrectAnswer={updateCorrectAnswerCount}
        correctAnswersCount={correctAnswers}
        quizTopic={quizTopic}
        noBackToStart={backToStart}
      />

      <Footer
        index={index}
        numberOfQuestions={numberOfQuestions}
        gameStatus={gameStatus}
      />
    </div>
  );
}

export default App;
