import React from "react";
import { Link } from "react-router-dom";
import "./ErrorScreen.css";

function ErrorScreen() {
  return (
    <main>
      <article>
        <h1> Woops, you reloded the page...</h1>
        <Link to="/"> Go Home</Link>
      </article>
    </main>
  );
}

export default ErrorScreen;
