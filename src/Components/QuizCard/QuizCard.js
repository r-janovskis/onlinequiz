import React from "react";
import "./QuizCard.css";
import { useDispatch, useSelector } from "react-redux";
import {
  answerCorrectly,
  nextQuestion,
  questions,
  index,
} from "../Quiz/QuizSlice";

function QuizCard(props) {
  let correctAnswer;
  const quizQuestions = useSelector(questions);
  const dispatch = useDispatch();

  const questionIndex = useSelector(index);

  console.log(quizQuestions);

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
  // dispatch(nextQuestion());

  return (
    <article className=" quizCard">
      <p className="question">{quizQuestions[questionIndex].question}</p>
      {quizQuestions[questionIndex].answers.map((answer, index) => {
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
    </article>
    // <article className="quizCard">
    //   <p>{quizQuestions[questionIndex].question}</p>
    //   <p>Question Nr {questionIndex + 1}</p>
    //   <button onClick={handleClick}>Next question</button>
    // </article>
  );
}

export default QuizCard;
