import React, { useEffect } from "react";
import "./NumberOfQuestionsPicker.css";

function NumberOfQuestionsPicker() {
  const handleChange = (event) => {
    document.getElementById("displayNumberOfQuestions").innerHTML =
      event.target.value;
  };

  useEffect(() => {
    document.getElementById("numberOfQuestions").value = 10;
    document.getElementById("displayNumberOfQuestions").innerHTML = 10;
  }, []);

  return (
    <section className="numberPicker">
      <div>
        <label className="form-label">Number of Questions in Quiz</label>
        <input
          type="range"
          className="form-range"
          min="5"
          max="20"
          step="1"
          id="numberOfQuestions"
          onChange={handleChange}
        />
      </div>
      <p id="displayNumberOfQuestions"></p>
    </section>
  );
}

export default NumberOfQuestionsPicker;
