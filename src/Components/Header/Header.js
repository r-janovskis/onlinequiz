import React from "react";
import "./Header.css";
import q_mark from "../../Images/big_q.png";

function Header(props) {
  return (
    <header>
      <h1>The Amazing Online Quiz!</h1>
      <img src={q_mark} alt="Rotating logo" />
    </header>
  );
}

export default Header;
