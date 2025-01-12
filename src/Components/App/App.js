import React from "react";
import "./App.css";
import Root from "../Root/Root";
import Rules from "../Rules/Rules";
import Home from "../Home/Home";
import Quiz from "../Quiz/Quiz";
import Results from "../Results/Results";

import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import ErrorScreen from "../ErrorScreen/ErrorScreen";

const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="/" element={<Home />} />
      <Route path="/rules" element={<Rules />} />
      <Route path="/error" element={<ErrorScreen />} />
      <Route path="/:quizTopic/results" element={<Results />} />
      <Route path="/:quizTopic/:questionNumber" element={<Quiz />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={appRouter} />;
}

export default App;
