import React from "react";
import "./Header.css";

import { NavLink } from "react-router-dom";

function Header(props) {
  return (
    <header>
      <h1>The Amazing Online Quiz!</h1>
      <ul className="nav">
        <li className="nav-item">
          <NavLink className="nav-link active" to="/">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="rules">
            Rules
          </NavLink>
        </li>
      </ul>
    </header>
  );
}

export default Header;
