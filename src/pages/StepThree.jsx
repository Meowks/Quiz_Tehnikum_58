import React, { useEffect, useState } from "react";
import { ProgressBar } from "../components/ProgressBar";
import Header from "../components/Header";
import { AddInputPic } from "../components/AddInputPic";
import { AddButton } from "../components/AddButton";
import { Link } from "react-router-dom";

const StepThree = () => {
  const icons = [
    {
      src: "./img/laugh.png",
      alt: "laugh"
    },
    {
      src: "./img/hearts.png",
      alt: "hearts"
    },
    {
      src: "./img/smirk.png",
      alt: "smirk"
    },
    {
      src: "./img/fright.png",
      alt: "fright"
    },
  ]

  const [emoji, setEmoji] = useState("")
  const [buttonError, setButtonError] = useState(true)

  useEffect(() => {
    if (emoji) {
      try {
        const userInfo = JSON.parse(localStorage.getItem("userInfo")) || {};
        userInfo.emoji = emoji;
        localStorage.setItem("userInfo", JSON.stringify(userInfo));
        setButtonError(false);
      } catch (error) {
        console.error("Ошибка при работе с localStorage:", error);
      }
    } else {
      setButtonError(true);
    }
  }, [emoji]);
  return (
    <div className="container">
      <div className="wrapper">
        <div className="emoji-quiz">

          <ProgressBar
            progressBarText="Скидка за прохождение опроса:"
            progressBarPercent="15%"
            currentStep={2}
          />

          <div className="question">
            <Header headerText={"3. Занимательный вопрос"} textType={"h2"} />

            <ul className="emoji-variants">
              {icons.map((elem, i) => (
                <AddInputPic
                  key={i}
                  inputType="radio"
                  inputName="variant"
                  inputId={`variant-${i + 1}`}
                  labelPic={elem.src}
                  labelPicAlt={elem.alt}
                  labelText={`Ваш ответ ${i + 1}`}
                  inputChange={setEmoji}
                  inputValue={emoji}
                  onChange={() => { setEmoji(elem.alt) }}
                  checked={emoji === elem.alt}
                />
              ))}
            </ul>
            <Link to="/step-four">
              <AddButton
                //buttonClick={}
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

export default StepThree;
