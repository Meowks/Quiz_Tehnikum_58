import React from "react";

export const AddButton = ({
  buttonText,
  buttonType,
  isDisabled,
  buttonClick
}) => {
  return (
    <button
      disabled={isDisabled}
      type={buttonType}
      onClick={buttonClick}
      id="next-btn"
    >
      {buttonText}
    </button>
  );
};