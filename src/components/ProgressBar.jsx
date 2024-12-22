import React from "react";

export const ProgressBar = ({ProgressBarText, ProgressBarPercent}) => {
  return (
    <div className="indicator">
      <div className="indicator__text">
        <span className="indicator__description">
          {ProgressBarText}
        </span>
        <span className="indicator__value">{ProgressBarPercent}</span>
      </div>

      <div className="indicator__progressbar">
        <div className="indicator__unit indicator__unit-1"></div>
        <div className="indicator__unit indicator__unit-2"></div>
        <div className="indicator__unit indicator__unit-3"></div>
        <div className="indicator__unit indicator__unit-4"></div>
      </div>
    </div>
  )
}