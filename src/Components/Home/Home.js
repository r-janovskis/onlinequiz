import React, { useState } from "react";
import QuizButton from "../QuizButton/QuizButton";
import NumberOfQuestionsPicker from "../NumberOfQuestionsPicker/NumberOfQuestionsPicker";
import { startQuiz } from "../Quiz/QuizSlice";
import Util from "../../Util/Util";
import { fetchQuestions } from "../Quiz/QuizSlice";
import { useDispatch } from "react-redux";

import { Link } from "react-router-dom";

import "./Home.css";

function Home() {
  const [quizOptions, setQuizOptions] = useState(Util.populateQuizOptions());

  // const testSportQuiz = async () => {
  //   console.log("Starting to fetch questions");
  //   const data = await fetch(
  //     "https://opentdb.com/api.php?amount=10&category=21"
  //   );

  //   if (!data.ok) {
  //     console.log("Data missing");
  //   }

  //   const json = await data.json();

  //   for (const questionObject of json.results) {
  //     console.log(questionObject.question);
  //     Util.formatAnswers(questionObject);
  //   }
  // };

  const dispatch = useDispatch();
  const testSportQuiz = () => {
    dispatch(
      fetchQuestions({
        quizId: 21,
        numberOfQuestions: Number(
          document.getElementById("displayNumberOfQuestions").innerHTML
        ),
      })
    );
  };

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

        <button onClick={testSportQuiz}>Test Sport Quiz</button>
      </article>
    </main>
  );
}

export default Home;
