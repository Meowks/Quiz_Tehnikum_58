import React from "react";

export const ProgressBar = ({ progressBarText, progressBarPercent, currentStep }) => {
  const variable = [1, 2, 3, 4]

  return (
    <div className="indicator">
      <div className="indicator__text">
        <span className="indicator__description">
          {progressBarText}
        </span>
        <span className="indicator__value">{progressBarPercent}</span>
      </div>
      <div className="indicator__progressbar">
      {variable.map((e, i) => (
        <div key={i} className={`indicator__unit indicator__unit-${e} ${currentStep>i && "_active"}`}></div>
      ))}
      </div>
    </div>
  )
}