import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { ProgressBar } from "../components/ProgressBar";
import { AddLabel } from "../components/AddLabel";
import { AddButton } from "../components/AddButton";
import { useNavigate } from "react-router-dom";

const StepOne = () => {
  const [answer, setAnswer] = useState("");
  const [answerError, setAnswerError] = useState(false)
  const [buttonError, setButtonError] = useState(true);

  const navigate = useNavigate()
  
  const hendleClick = (() => {
    if (!answer) {
      setAnswerError(true)
    } else {
      setAnswerError(false)
      navigate("/step-two")
      const userInfo = {...JSON.parse(localStorage.getItem("userInfo")),answer}
      localStorage.setItem("userInfo",JSON.stringify(userInfo))
    }
  })

  useEffect(() => {
    if (!answer) {
      setButtonError(true)
      
    } else {
      setButtonError(false)
    }
  });

  return (
    <div className="container">
      <div className="wrapper">
        <div className="single-input-quiz">

          <ProgressBar
            progressBarText="Скидка за прохождение опроса:"
            progressBarPercent="15%"
            currentStep={0}
          />

          <div className="question">
            <Header
              headerText="Откуда вы о нас узнали?"
              textType="h2"
            />

            <AddLabel
              labelType="text"
              labelName="answer"
              labelPlaceholder="Ваш ответ"
              labelError="Введите ответ в правильном формате например"
              inputValue={answer}
              inputChange={setAnswer}
              hasError={answerError}
            />

            <AddButton
              buttonText="Далее"
              buttonType="button"
              isDisabled={buttonError}
              buttonClick={hendleClick}
            />

          </div>

        </div>
      </div>
    </div>
  );
};

export default StepOne;
