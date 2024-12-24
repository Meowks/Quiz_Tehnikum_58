import React from "react";

export const AddLabel = ({
  labelText,
  labelType,
  labelName,
  labelPlaceholder,
  labelError,
  inputValue,
  inputChange,
  hasError,
}) => {
  return (
    <label className={`input-wrapper ${hasError && "_error"}`} 
    htmlFor={labelName}
    >
      {labelText}
      <input
        required
        type={labelType}
        name={labelName}
        id={labelName}
        placeholder={labelPlaceholder}
        value={inputValue}
        onChange={(e) => inputChange(e.target.value)}
      />
      {hasError && <span id="error-message">{labelError}</span>}
    </label>
  );
};

