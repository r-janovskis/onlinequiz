import React from "react";
import "./DifficultyPicker.css";

function DifficultyPicker() {
  return (
    <div className="difficultyPicker">
      <label htmlFor="difficulty">Dificulty</label>
      <select
        name="difficulty"
        id="difficulty"
        className="form-select form-select-md"
      >
        <option value="any" defaultValue>
          Mixed
        </option>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>
    </div>
  );
}

export default DifficultyPicker;
