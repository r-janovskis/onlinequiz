import React from "react";
import "./QuestionAnswer.css";

function QuestionAnswer(props) {
  for (let i = 0; i < props.question.answers.length; i++) {
    if (props.question.answers[i].correct) {
      return (
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse${props.index}`}
              aria-expanded="false"
              aria-controls={`collapse${props.index}`}
            >
              {props.question.question}
            </button>
          </h2>
          <div
            id={`collapse${props.index}`}
            className="accordion-collapse collapse"
            data-bs-parent="#answers"
          >
            <div className="accordion-body">
              {props.question.answers[i].answer}
            </div>
          </div>
        </div>
      );
    }
  }
}

export default QuestionAnswer;
