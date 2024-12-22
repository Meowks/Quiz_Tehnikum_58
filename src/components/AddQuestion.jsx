import React from "react";

export const AddQuestion = () => {
  return (
    <div className="question">
      <h2>1. Занимательный вопрос</h2>
      
      <label className="input-wrapper">
        <input
          required
          type="text"
          name="answer"
          placeholder="Ваш ответ"
        />
        <span id="error-message">
          Введите номер в правильном формате например
        </span>
      </label>

      <button type="button" disabled id="next-btn">
        Далее
      </button>
    </div>

  )
}