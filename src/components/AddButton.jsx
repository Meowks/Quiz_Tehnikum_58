import React from "react";

export const AddButton = ({
  buttonText,
  buttonType,
  isDisabled,
  buttonClick,
  buttonId="next-btn",
}) => {
  return (
    <button
      disabled={isDisabled}
      type={buttonType}
      onClick={buttonClick}
      id={buttonId}
    >
      {buttonText}
    </button>
  );
};