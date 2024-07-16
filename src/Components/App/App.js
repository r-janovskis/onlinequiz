import React, { useState, useEffect } from "react";
import logo from "../../logo.svg";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";

function App() {
  const [gameActive, setGameActive] = useState(false);

  function changeGameState() {
    setGameActive((prev) => (prev ? false : true));
  }

  /*
  useEffect(() => {
    console.log(gameActive);
  }, [gameActive]);
  */

  return (
    <div className="App">
      <Header />
      <Main isGameActive={gameActive} onGameChange={changeGameState} />
    </div>
  );
}

export default App;
