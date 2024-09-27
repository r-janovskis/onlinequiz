import Util from "../../Util/Util";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  answerCorrectly,
  nextQuestion,
  questions,
  index,
  quizTopic,
  questionCount,
} from "../Quiz/QuizSlice";
import QuizCard from "../QuizCard/QuizCard";
import "./Quiz.css";

import { useParams, useNavigate, Outlet, Link } from "react-router-dom";

function Quiz(props) {
  //const { quizTopic } = useParams();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const quizQuestions = useSelector(questions);
  const questionNumber = useSelector(index);
  const quizTitle = useSelector(quizTopic);
  const numberOfQuestions = useSelector(questionCount);
  //quizTitle = quizTitle.charAt(0).toUpperCase() + quizTitle.slice(1);

  let correctAnswer;

  //console.log(quizQuestions);

  //const question = props.question;

  function handleSelectAnswer(event) {
    const buttonClicked = event.target;
    if (buttonClicked.textContent === correctAnswer) {
      buttonClicked.classList.add("correct");
      // document
      //   .getElementsByClassName("answerCube")
      //   [props.index].classList.add("correctCube");
      dispatch(answerCorrectly());
    } else {
      buttonClicked.classList.add("incorrect");
      // document
      //   .getElementsByClassName("answerCube")
      //   [props.index].classList.add("incorrectCube");
    }

    const answerButtons = document.getElementsByClassName("answerButton");
    for (let i = 0; i < answerButtons.length; i++) {
      if (
        answerButtons[i].classList.contains("correct") ||
        answerButtons[i].classList.contains("incorrect")
      ) {
        continue;
      }
      answerButtons[i].disabled = true;
    }

    document.getElementById("nextButton").style.display = "block";
    //props.onAnswerQuestion();
  }

  const [correctAnswers, setCorrectAnswers] = useState(0);

  const goHome = () => {
    navigate("/");
  };

  function handleClickNext() {
    // Remove the answered style
    const answerButtons = document.getElementsByClassName("answerButton");
    for (let i = 0; i < answerButtons.length; i++) {
      answerButtons[i].classList.remove("correct");
      answerButtons[i].classList.remove("incorrect");
      answerButtons[i].disabled = false;
    }

    if (questionNumber + 1 === numberOfQuestions) {
      navigate(`/${quizTitle}/results`);
    }

    // console.log(`Before: ${questionNumber}, ${numberOfQuestions}`);
    dispatch(nextQuestion());
    // const newIndex = useSelector(index);
    // console.log(`After dispatch: ${newIndex}, ${numberOfQuestions}`);

    // navigate(`/${quizTitle}/${newIndex + 1}`);
  }

  useEffect(() => {
    if (questionNumber < numberOfQuestions) {
      navigate(`/${quizTitle}/${questionNumber + 1}`);
    }
  }, [questionNumber]);
  /*
  if (props.index + 1 === props.numberOfQuestions) {
    return (
      <div className="container">
        <h1>{props.quizTopic} Quiz</h1>
        <QuizCard
          question={props.question}
          onAnswerQuestion={props.onAnswerQuestion}
          onCorrectAnswer={props.onCorrectAnswer}
          index={props.index}
        />
        <button
          id="nextButton"
          className="btn btn-lg mainButton"
          onClick={props.onEndGame}
        >
          Finish Quiz
        </button>
      </div>
    );
  }
  return (
    <div className="container">
      <h1>{props.quizTopic} Quiz</h1>
      <QuizCard
        question={props.question}
        onAnswerQuestion={props.onAnswerQuestion}
        onCorrectAnswer={props.onCorrectAnswer}
        index={props.index}
      />
      <button
        id="nextButton"
        className="btn btn-lg mainButton"
        onClick={props.onNextQuestion}
      >
        Next
      </button>
    </div>
  );
  */
  if (quizQuestions.length === 0 || !quizQuestions) {
    return (
      <article>
        <h1> Woops, you reloded the page...</h1>
        <Link to="/"> Go Home</Link>
      </article>
    );
  } else {
    return (
      <article>
        <h1>{quizTitle.charAt(0).toUpperCase() + quizTitle.slice(1)} Quiz</h1>

        <section className=" quizCard">
          <p className="question">{quizQuestions[questionNumber].question}</p>
          {quizQuestions[questionNumber].answers.map((answer, index) => {
            if (answer.correct === true) {
              correctAnswer = answer.answer;
            }
            return (
              <button
                key={`Q${index}`}
                className="btn btn-outline-secondary answerButton"
                onClick={handleSelectAnswer}
              >
                {answer.answer}
              </button>
            );
          })}
        </section>
        <button
          id="nextButton"
          className="btn btn-lg mainButton"
          onClick={handleClickNext}
        >
          Next
        </button>
      </article>
    );
  }
}

export default Quiz;
