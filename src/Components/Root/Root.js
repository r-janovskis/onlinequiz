import React, { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Root.css";

import { Outlet } from "react-router-dom";

function Root() {
  const [quizTopic, setQuizTopic] = useState("");

  function startGame(quizTopic) {
    console.log(quizTopic);
    setQuizTopic(quizTopic);
    //setQuestions(() => Util.generateQuiz(numberOfQuestions, quizTopic));
    //setGameStatus("active");
    //setIndex(0);
  }

  return (
    <div className="App">
      <Header />
      <Outlet quizTopic={quizTopic} onStartGame={startGame} />
      <Footer />
    </div>
  );
}

export default Root;
