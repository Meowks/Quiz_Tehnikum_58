import React from "react";

export const AddLabel = ({
  labelText,
  labelType,
  labelName,
  labelPlaceholder,
  labelError,
}) => {
  return (
    <label className="input-wrapper" htmlFor={labelName}>
      {labelText}
      <input
        required
        type={labelType}
        name={labelName}
        id={labelName}
        placeholder={labelPlaceholder}
      />
      <span id="error-message">
        {labelError}
      </span>
    </label>
  );
};

