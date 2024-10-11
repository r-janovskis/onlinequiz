import React from "react";
import "./Header.css";

import { NavLink, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/rules");
  };

  return (
    <header>
      <h1>The Amazing Online Quiz!</h1>
      {/* <ul className="nav">
        { <li className="nav-item">
          <NavLink className="nav-link active" to="/">
            Home
          </NavLink>
        </li> }
        <li className="nav-item">
          <NavLink className="nav-link" to="rules">
            Rules
          </NavLink>
        </li>
      </ul> */}
      {/* <button
        id="rulesButton"
        className="btn btn-outline-info"
        onClick={handleClick}
      >
        Rules
      </button> */}
    </header>
  );
}

export default Header;
