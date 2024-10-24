const Util = {
  QUIZ_TOPICS: [
    "General Knowledge",
    "Sport",
    "Book",
    "Geography",
    "Animal",
    "Mathematics",
    "Science & Nature",
  ],

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

  cleanUpText(text) {
    let newText = text.replaceAll("&#039;", "'");
    newText = newText.replaceAll("&rsquo;", "'");
    newText = newText.replaceAll("&lsquo;", "'");
    newText = newText.replaceAll("&quot;", "'");
    newText = newText.replaceAll("&amp;", "&");
    newText = newText.replaceAll("&lrm;", "");
    newText = newText.replaceAll("&ouml;", "ö");
    newText = newText.replaceAll("&ocirc;", "ô");
    newText = newText.replaceAll("&Eacute;", "É");
    newText = newText.replaceAll("&sup2;", "^2");
    newText = newText.replaceAll("&sup3;", "^3");
    newText = newText.replaceAll("&deg;", "°");
    newText = newText.replaceAll("&pi;", "π");
    newText = newText.replaceAll("&hellip;", "...");
    newText = newText.replaceAll("&ldquo;", "“");
    newText = newText.replaceAll("&rdquo;", "”");
    newText = newText.replaceAll("&mdash;", "—");
    newText = newText.replaceAll("&ndash;", "–");
    newText = newText.replaceAll("&bull;", "•");
    newText = newText.replaceAll("&copy;", "©");
    newText = newText.replaceAll("&reg;", "®");
    newText = newText.replaceAll("&trade;", "TM");
    newText = newText.replaceAll("&times;", "×");
    newText = newText.replaceAll("&divide;", "÷");
    newText = newText.replaceAll("&lt;", "<");
    newText = newText.replaceAll("&gt;", ">");

    return newText;
  },

  /**
   * Formats a question object's correct and incorrect answers into a standard
   * answer format.
   *
   * @param {object} questionObject - A question object with a correct answer and
   * an array of incorrect answers.
   * @return {array} An array of answer objects with a correct answer and
   * incorrect answers.
   */
  formatAnswers(questionObject) {
    const answerArray = [];

    // Format and add correct answer
    answerArray.push({
      answer: Util.cleanUpText(questionObject.correct_answer),
      correct: true,
    });

    // Add all the incorrect answers
    for (let answer of questionObject.incorrect_answers) {
      answerArray.push({
        answer: Util.cleanUpText(answer),
        correct: false,
      });
    }

    return answerArray;
  },

  /**
   * Generates a quiz with a specified number of questions from a chosen category.
   *
   * @param {number} numberOfQuestions - The number of questions to be generated for the quiz.
   * @param {string} quizName - The category of the quiz (e.g., "Disney", "Geography", "Sports").
   * @return {array} An array of quiz questions with randomized answers.
   */
  generateQuiz(numberOfQuestions, quizQuestionSet = []) {
    let questions = [];
    // let allQuizQuestions = [];

    // switch (quizName.toLowerCase()) {
    //   case "disney":
    //     allQuizQuestions = QuizQuestions.disney;
    //     break;
    //   case "geography":
    //     allQuizQuestions = QuizQuestions.geography;
    //     break;
    //   case "sports":
    //     allQuizQuestions = QuizQuestions.sports;
    //     break;
    //   default:
    //     allQuizQuestions = quizQuestionSet;
    //     break;
    // }

    let randomQuestionSequence = this.generateSequence(quizQuestionSet.length);

    let index = 0;
    while (
      questions.length < numberOfQuestions &&
      randomQuestionSequence.length > 0
    ) {
      questions.push(quizQuestionSet[randomQuestionSequence.shift()]);

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
    return Util.QUIZ_TOPICS;
  },
};

export default Util;
