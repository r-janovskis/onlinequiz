import React from "react";
import "./Home.css";
import QuizPicker from "../QuizPicker/QuizPicker";

function Home(props) {
  return (
    <main>
      <article className="container">
        <h1>Welcome To The Amazing Online Quizes!</h1>
        <p className="intro">
          Ready to test your knowledge and have some fun? Dive into our exciting
          quizzes covering some specific topics, from pop culture to science,
          history, and more. Challenge yourself, compete with friends, and see
          how you rank on our leaderboard. Whether you’re a trivia buff or just
          looking for a fun way to pass the time, QuizMaster has something for
          everyone. Let’s get quizzing! Don't forget to check us out time to
          time, since new quizes are on the way!
        </p>
        <QuizPicker startGame={props.onStartGame} />
      </article>
    </main>
  );
}

export default Home;
