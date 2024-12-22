import React from "react";

export const AddButton = ({
  buttonText,
  buttonType,
  isDisabled
}) => {
  return (
    <button disabled={isDisabled} type={buttonType} id="next-btn">
      {buttonText}
    </button>
  );
};