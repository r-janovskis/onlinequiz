import React from "react";
import "./LoadingScreen.css";

function LoadingScreen() {
  return (
    <main>
      <article>
        <h1>Loading...</h1>
        <div className="pl">
          <div className="pl__outer-ring"></div>
          <div className="pl__inner-ring"></div>
          <div className="pl__track-cover"></div>
          <div className="pl__ball">
            <div className="pl__ball-texture"></div>
            <div className="pl__ball-outer-shadow"></div>
            <div className="pl__ball-inner-shadow"></div>
            <div className="pl__ball-side-shadows"></div>
          </div>
        </div>
      </article>
    </main>
  );
}

export default LoadingScreen;
