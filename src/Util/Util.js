import QuizQuestions from "./QuizQuestions";

const Util = {
  /**
   * Generates a random sequence of numbers from 0 to size - 1.
   *
   * @param {number} size - The length of the sequence to be generated.
   * @return {number} A new array,that contains the generated sequence of random numbers from 0 to size - 1.
   */
  generateSequence(size) {
    let range = Array.from({ length: size }, (_, i) => i);
    let sequence = [];

    while (range.length > 0) {
      sequence.push(range.splice(Math.floor(Math.random() * range.length), 1));
    }
    return sequence;
  },

  /**
   * Randomizes the order of the given answers for a question.
   *
   * This function works by repeatedly removing a random element from the
   * input array and adding it to the output array. The input array is
   * modified in place, while the output array is a new array.
   *
   * @param {array} answers - The array of answers to be randomized.
   * @return {array} A new array with the answers in a random order.
   */
  randomizeAnswers(answers) {
    const newAnswers = [];

    while (answers.length > 0) {
      newAnswers.push(
        answers.splice(Math.floor(Math.random() * answers.length), 1)
      );
    }
    return newAnswers;
  },

  /**
   * Generates a quiz with a specified number of questions from a chosen category.
   *
   * @param {number} numberOfQuestions - The number of questions to be generated for the quiz.
   * @param {string} quizName - The category of the quiz (e.g., "Disney", "Geography", "Sports").
   * @return {array} An array of quiz questions with randomized answers.
   */
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
    return questions;
  },

  populateQuizOptions: () => {
    return Object.keys(QuizQuestions);
  },
};

export default Util;
