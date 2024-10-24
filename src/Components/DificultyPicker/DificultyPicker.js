import React from "react";
import "./DificultyPicker.css";

function DificultyPicker() {
  return (
    <div className="dificultyPicker">
      <label htmlFor="dificulty">Dificulty</label>
      <select name="dificulty" id="dificulty">
        <option value="any" selected>
          Mixed
        </option>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>
    </div>
  );
}

export default DificultyPicker;
