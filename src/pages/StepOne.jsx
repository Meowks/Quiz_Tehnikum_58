import React from "react";
import { ProgressBar } from "../components/ProgressBar";
import Header from "../components/Header";
import { AddLabel } from "../components/AddLabel";
import { AddButton } from "../components/AddButton";

const StepOne = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="single-input-quiz">

          <ProgressBar
            ProgressBarText="Скидка за прохождение опроса:"
            ProgressBarPercent="15%"
          />

          <div className="question">
            <Header
              headerText="1. Занимательный вопрос"
              textType="h2"
            />

            <AddLabel
              labelType="text"
              labelName="answer"
              labelPlaceholder="Ваш ответ"
              labelError="Введите номер в правильном формате например"
            />

            <AddButton
              buttonText="Далее"
              buttonType="button"
              isDisabled={true}
            />

          </div>

        </div>
      </div>
    </div>
  );
};

export default StepOne;
