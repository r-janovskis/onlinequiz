import QuizQuestions from "./QuizQuestions";

const Util = {
  generateSequence(size) {
    let range = Array.from({ length: size }, (_, i) => i);
    let sequence = [];

    while (range.length > 0) {
      //let value = Math.floor(Math.random() * range.length);
      //if (sequence.indexOf(value) === -1) {
      //  continue;
      //}
      sequence.push(range.splice(Math.floor(Math.random() * range.length), 1));
    }
    return sequence;
  },

  randomizeAnswers(answers) {
    const newAnswers = [];

    while (answers.length > 0) {
      newAnswers.push(
        answers.splice(Math.floor(Math.random() * answers.length), 1)
      );
    }
    return newAnswers;
  },

  generateQuiz(numberOfQuestions, quizName) {
    let questions = [];
    let allQuizQuestions = [];

    switch (quizName) {
      case "Disney":
        allQuizQuestions = QuizQuestions.disney;
        break;
      case "Geography":
        allQuizQuestions = QuizQuestions.geography;
        break;
      case "Sports":
        allQuizQuestions = QuizQuestions.sports;
        break;
      default:
        break;
    }

    let randomQuestionSequence = this.generateSequence(allQuizQuestions.length);
    /*
    while (array.length < numberOfQuestions) {
      let index = Math.floor(Math.random() * allQuizQuestions.length);
      if (array.indexOf(index) === -1) {
        array.push(index);
      }
    }
    */

    let index = 0;
    while (
      questions.length < numberOfQuestions &&
      randomQuestionSequence.length > 0
    ) {
      questions.push(allQuizQuestions[randomQuestionSequence.shift()]);

      //randomize answers
      let sequenceOfAnswers = this.generateSequence(
        questions[index].answers.length
      );
      let newAnswers = [];
      for (let i = 0; i < sequenceOfAnswers.length; i++) {
        newAnswers.push(questions[index].answers[sequenceOfAnswers[i]]);
      }

      questions[index].answers = newAnswers;

      index++;
    }
    //console.log(questions[0].question);
    return questions;
  },
};

export default Util;
