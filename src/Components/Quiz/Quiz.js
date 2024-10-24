import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  answerCorrectly,
  nextQuestion,
  questions,
  index,
  quizTopic,
  questionCount,
  isLoading,
} from "../Quiz/QuizSlice";
import "./Quiz.css";
import LoadingScreen from "../LoadingScreen/LoadingScreen";
import ErrorScreen from "../ErrorScreen/ErrorScreen";

import { useNavigate } from "react-router-dom";

function Quiz() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const quizQuestions = useSelector(questions);
  const questionNumber = useSelector(index);
  const quizTitle = useSelector(quizTopic);
  const numberOfQuestions = useSelector(questionCount);
  const loading = useSelector(isLoading);

  let correctAnswer;

  function handleSelectAnswer(event) {
    const buttonClicked = event.target;
    if (buttonClicked.textContent === correctAnswer) {
      buttonClicked.classList.add("correct");
      dispatch(answerCorrectly());
    } else {
      buttonClicked.classList.add("incorrect");
    }

    const answerButtons = document.getElementsByClassName("answerButton");
    for (let i = 0; i < answerButtons.length; i++) {
      answerButtons[i].classList.add("deactivated");
      if (
        answerButtons[i].textContent === correctAnswer &&
        !answerButtons[i].classList.contains("correct")
      ) {
        answerButtons[i].classList.add("correctAfterAnswer");
      }
    }
    document.getElementById("nextButton").style.display = "block";
  }

  function handleClickNext() {
    // Remove the answered style
    const answerButtons = document.getElementsByClassName("answerButton");
    for (let i = 0; i < answerButtons.length; i++) {
      answerButtons[i].classList.remove("correct");
      answerButtons[i].classList.remove("incorrect");
      answerButtons[i].classList.remove("correctAfterAnswer");
      answerButtons[i].classList.remove("deactivated");
    }

    //console.log(`${questionNumber}`);
    if (questionNumber + 1 === numberOfQuestions) {
      navigate(`/${quizTitle}/results`);
    }

    dispatch(nextQuestion());
    document.getElementById("nextButton").style.display = "none";
  }

  useEffect(() => {
    if (questionNumber < numberOfQuestions) {
      navigate(`/${quizTitle}/${questionNumber + 1}`);
    }
  }, [questionNumber]);

  if (quizQuestions.length === 0 || !quizQuestions) {
    if (loading) {
      return <LoadingScreen></LoadingScreen>;
    }
    return <ErrorScreen></ErrorScreen>;
  } else {
    return (
      <main>
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
                  className="btn btn-outline-dark answerButton"
                  onClick={handleSelectAnswer}
                  onTouchEnd={handleSelectAnswer}
                >
                  {answer.answer}
                </button>
              );
            })}
          </section>
          <button
            id="nextButton"
            className="btn btn-primary mainButton"
            onClick={handleClickNext}
          >
            Next
          </button>
        </article>
      </main>
    );
  }
}

export default Quiz;
