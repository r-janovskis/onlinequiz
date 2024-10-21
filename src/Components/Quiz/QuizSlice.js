import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import Util from "../../Util/Util";

const initialQuizState = {
  quizTopic: "",
  questions: [],
  index: 0,
  questionCount: 0,
  correctAnswers: 0,
  isLoading: false,
  hasError: false,
};

export const fetchQuestions = createAsyncThunk(
  "quiz/fetchQuestions",
  async (quizParameters) => {
    const { quizTopic, questionCount } = quizParameters;

    // Select right quizID
    let quizId = 0;
    switch (quizTopic) {
      case "Sport":
        quizId = 21;
        break;
      case "Geography":
        quizId = 22;
        break;
      case "Animal":
        quizId = 27;
        break;
      case "Mathematics":
        quizId = 19;
        break;
      case "Science & Nature":
        quizId = 17;
        break;
      case "Book":
        quizId = 10;
        break;
      default:
        quizId = 9;
        break;
    }
    console.log("Starting to fetch questions");
    console.log(
      `Quiz ID: ${quizId} | Number of questions requested: ${questionCount}`
    );
    const data = await fetch(
      `https://opentdb.com/api.php?amount=${questionCount}&category=${quizId}`
    );

    if (!data.ok) {
      console.log("Data missing");
    }

    const json = await data.json();

    //console.log(json);
    const setOfQuestions = [];

    for (const questionObject of json.results) {
      // let question = questionObject.question.replace("&#039;", "'");
      // question = question.replace("&rsquo;", "'");
      // question = question.replace("&lsquo;", "'");
      const newQuestion = {
        question: Util.cleanUpText(questionObject.question),
        answers: Util.formatAnswers(questionObject),
      };

      // console.log(questionObject.question);
      // Util.formatAnswers(questionObject);
      setOfQuestions.push(newQuestion);
    }

    return {
      quizTopic: quizTopic,
      questions: setOfQuestions,
      questionCount: questionCount,
    };
  }
);

const quizReducers = {
  nextQuestion: (state) => {
    return {
      ...state,
      index: state.index + 1,
    };
  },
  startQuiz: (state, action) => {
    return {
      ...state,
      quizTopic: action.payload.quizTopic,
      questionCount: action.payload.questionCount,
      questions: Util.generateQuiz(
        action.payload.questionCount,
        action.payload.quizTopic
      ),
    };
  },
  answerCorrectly: (state) => {
    return {
      ...state,
      correctAnswers: state.correctAnswers + 1,
    };
  },
  resetToInitialState: (state) => {
    return {
      quizTopic: "",
      questions: [],
      index: 0,
      questionCount: 0,
      correctAnswers: 0,
    };
  },
};

const options = {
  name: "quiz",
  initialState: initialQuizState,
  reducers: quizReducers,
  extraReducers: (builder) => {
    builder.addCase(fetchQuestions.pending, (state) => {
      return {
        ...state,
        isLoading: true,
        hasError: false,
      };
    });
    builder.addCase(fetchQuestions.fulfilled, (state, action) => {
      return {
        ...state,
        quizTopic: action.payload.quizTopic,
        questionCount: action.payload.questionCount,
        isLoading: false,
        hasError: false,
        questions: Util.generateQuiz(
          action.payload.questionCount,
          "",
          action.payload.questions
        ),
      };
    });
    builder.addCase(fetchQuestions.rejected, (state) => {
      return {
        ...state,
        isLoading: false,
        hasError: true,
      };
    });
  },
};

export const quizSlice = createSlice(options);

//export const quiz = (state) => state.quiz;
export const questions = (state) => state.quiz.questions;
export const index = (state) => state.quiz.index;
export const quizTopic = (state) => state.quiz.quizTopic;
export const correctAnswersCount = (state) => state.quiz.correctAnswers;
export const questionCount = (state) => state.quiz.questionCount;
export const isLoading = (state) => state.quiz.isLoading;
export const hasError = (state) => state.quiz.hasError;

export const { answerCorrectly, nextQuestion, startQuiz, resetToInitialState } =
  quizSlice.actions;

export default quizSlice.reducer;
