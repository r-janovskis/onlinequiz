import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import Util from "../../Util/Util";

const initialQuizState = {
  quizTopic: "",
  questions: [],
  index: 0,
  questionCount: 0,
  correctAnswers: 0,
};

export const fetchQuestions = createAsyncThunk(
  "quiz/fetchQuestions",
  async (quizParameters) => {
    const { quizId, numberOfQuestions } = quizParameters;
    console.log("Starting to fetch questions");
    console.log(
      `Quiz ID: ${quizId} | Number of questions requested: ${numberOfQuestions}`
    );
    const data = await fetch(
      `https://opentdb.com/api.php?amount=${numberOfQuestions}&category=${quizId}`
    );

    if (!data.ok) {
      console.log("Data missing");
    }

    const json = await data.json();

    //console.log(json);

    for (const questionObject of json.results) {
      console.log(questionObject.question);
      Util.formatAnswers(questionObject);
    }
    return json;
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
    builder.addCase(fetchQuestions.fulfilled, (state, action) => {
      state.questions = action.payload;
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

export const { answerCorrectly, nextQuestion, startQuiz, resetToInitialState } =
  quizSlice.actions;

export default quizSlice.reducer;
