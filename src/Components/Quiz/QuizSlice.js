import { createSlice } from "@reduxjs/toolkit";

import Util from "../../Util/Util";

const initialQuizState = {
  quizTopic: "",
  questions: [],
  index: 0,
  questionCount: 0,
  correctAnswers: 0,
};

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
};

const options = {
  name: "quiz",
  initialState: initialQuizState,
  reducers: quizReducers,
};

export const quizSlice = createSlice(options);

//export const quiz = (state) => state.quiz;
export const questions = (state) => state.quiz.questions;
export const index = (state) => state.quiz.index;
export const quizTopic = (state) => state.quiz.quizTopic;
export const correctAnswersCount = (state) => state.quiz.correctAnswers;
export const questionCount = (state) => state.quiz.questionCount;

export const { answerCorrectly, nextQuestion, startQuiz } = quizSlice.actions;

export default quizSlice.reducer;
