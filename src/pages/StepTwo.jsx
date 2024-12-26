import React from "react";
import Header from "../components/Header";
import { AnswerItems } from "../components/AnswerItems";
import { ProgressBar } from "../components/ProgressBar";
import { Link } from "react-router-dom";
import { AddButton } from "../components/AddButton";

const StepTwo = () => {
  const variants = [
    {
      id: "variant-1",
      labelText: "Frontend"
    },
    {
      id: "variant-2",
      labelText: "Python"
    },
    {
      id: "variant-3",
      labelText: "Ux/Ix"
    },
    {
      id: "variant-4",
      labelText: "Fullstack"
    },
  ]

  return (
    <div className="container">
      <div className="wrapper">
        <div className="variants-quiz">

          <ProgressBar
            progressBarText="Скидка за прохождение опроса:"
            progressBarPercent="15%"
            currentStep={1} 
          />

          <div className="question">

            <Header headerText={"Выберите курс"} textType={"h2"} />

            <ul className="variants">
              {variants.map((elem) => {
                return (
                  <AnswerItems
                    key={elem.id}
                    answerText={elem.labelText}
                    answerVariants={elem.id}
                  />
                )
              })}

            </ul>
            <Link to="/step-three">
              <AddButton
                // buttonClick={x}
                buttonType="button"
                isDisabled={false}
                buttonText="Далее"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepTwo;
