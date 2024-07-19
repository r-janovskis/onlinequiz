import QuizQuestions from "./QuizQuestions";

const Util = {
  generateSequence() {
    let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let sequence = [];

    while (array.length > 0) {
      sequence.push(array.splice(Math.floor(Math.random() * array.length), 1));
    }
    return sequence;
  },

  generateQuiz(quizName = "disney") {
    let array = [];
    let questions = [];
    let allQuizQuestions = [];

    switch (quizName) {
      case "disney":
        allQuizQuestions = QuizQuestions.disney;
        break;
      default:
        break;
    }

    while (array.length < 10) {
      array.push(Math.floor(Math.random() * allQuizQuestions.length));
    }

    let index = 0;
    while (array.length > index) {
      questions.push(allQuizQuestions[array[index]]);
      index++;
    }
    //console.log(questions[0].question);
    return questions;
  },
};

export default Util;
