import QuizSliceReducer from "./Components/Quiz/QuizSlice";

import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    quiz: QuizSliceReducer,
  },
});
