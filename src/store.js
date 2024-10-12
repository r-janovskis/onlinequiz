import QuizSliceReducer from "./Components/Quiz/QuizSlice";

import { configureStore } from "@reduxjs/toolkit";

const logger = (storeAPI) => (next) => (action) => {
  console.log(`State at start of middleware: ${storeAPI.getState()}`);
  const nextState = next(action);
  console.log(`State after next(action): ${nextState}`);
};

export const store = configureStore({
  reducer: {
    quiz: QuizSliceReducer,
  },
});
