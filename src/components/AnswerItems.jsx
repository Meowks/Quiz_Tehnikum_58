import React from "react";

export const AnswerItems = ({ answerText, answerVariants }) => {
  return (
    <li className="variant-wrapper">
      <input required type="radio" name={answerVariants} id={answerVariants} />
      <label htmlFor={answerVariants}>{answerText}</label>
    </li>
  )
}