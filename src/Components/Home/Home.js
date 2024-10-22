import React, { useState } from "react";
import QuizButton from "../QuizButton/QuizButton";
import NumberOfQuestionsPicker from "../NumberOfQuestionsPicker/NumberOfQuestionsPicker";
import { startQuiz } from "../Quiz/QuizSlice";
import Util from "../../Util/Util";

import { Link } from "react-router-dom";

import "./Home.css";

function Home() {
  const [quizOptions, setQuizOptions] = useState(Util.populateQuizOptions());

  return (
    <main>
      <article className="container">
        <h1>Welcome To The Amazing Online Quizes!</h1>
        <p>
          Ready to test your knowledge and have some fun? Dive into our exciting
          quizzes covering some specific topics, from pop culture to science,
          history, and more.
        </p>
        <p className="hideSmallScreen">
          Challenge yourself, compete with friends, and see how you rank on our
          leaderboard. Whether you’re a trivia buff or just looking for a fun
          way to pass the time, QuizMaster has something for everyone. Let’s get
          quizzing! Don't forget to check us out time to time, since new quizes
          are on the way!
        </p>
        <p>
          To learn how to play the game click the link below, or if you are
          ready to start the quiz pick one of the topics.
        </p>
        <Link to="/rules">Quiz Rules</Link>
        <NumberOfQuestionsPicker />
        <section className="quizChoices">
          {quizOptions.map((option, index) => (
            <QuizButton key={index} quizName={option} onStartGame={startQuiz} />
          ))}
        </section>
      </article>
    </main>
  );
}

export default Home;
