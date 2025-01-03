import React, { useState, useEffect } from "react";
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

  const [checkedAnswer, setCheckedAnswer] = useState("")
  const [buttonError, setButtonError] = useState(true)

  useEffect(() => {
    const userInfo = {...JSON.parse(localStorage.getItem("userInfo")),checkedAnswer}
    localStorage.setItem("userInfo",JSON.stringify(userInfo))
    if(!checkedAnswer){
      setButtonError(true)
    }else{
      setButtonError(false)
    }
  }, [checkedAnswer])

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
                    onChange={() => { setCheckedAnswer(elem.labelText) }}
                    checked={checkedAnswer === elem.labelText}
                  />
                )
              })}

            </ul>
            <Link to="/step-three">
              <AddButton
                //buttonClick={x}
                buttonType="button"
                isDisabled={buttonError}
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
