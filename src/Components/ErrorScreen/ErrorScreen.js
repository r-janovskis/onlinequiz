import React from "react";
import { Link } from "react-router-dom";
import "./ErrorScreen.css";

function ErrorScreen() {
  return (
    <main>
      <article>
        <h1> Woops, something went wrong...</h1>
        <Link to="/"> Go Home</Link>
      </article>
    </main>
  );
}

export default ErrorScreen;
