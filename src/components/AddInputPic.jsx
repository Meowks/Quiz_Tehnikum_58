import React from "react";

export const AddInputPic = ({
  inputType,
  inputName,
  inputId,
  labelPic,
  labelPicAlt, 
  labelText,
}) => {

  return (
    <li className="variant-wrapper">
      <input required type={inputType} name={inputName} id={inputId} />
      <label htmlFor={inputId}>
        <img src={labelPic} alt={labelPicAlt} />
        <p>{labelText}</p>
      </label>
    </li>
  )
}

