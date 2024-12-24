import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { AddLabel } from "../components/AddLabel";
import { AddButton } from "../components/AddButton";

const Welcome = () => {
  const RegexPhone = /^\+?\d{1,3}[-.\s]?\(?\d{1,4}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/
  const RegexName = /^[a-zA-Zа-яА-ЯёЁ\s]+$/
  

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const [nameError, setNameError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [buttonError, setButtonError] = useState(true);

  const handleClick = () => {
    if (!RegexName.test(name)) {
      setNameError(true);
    } else if (!RegexPhone.test(phone)) {
      setPhoneError(true);
    } else {
      setNameError(false);
      setPhoneError(false);
    }
  };

  useEffect(() => {
    if(!name || !phone){
      setButtonError(true)
    } else {
      setButtonError(false)
    }
  }, [name, phone]);



  return (
    <div className="container">
      <div className="wrapper">
        <div className="welcome">
          <Header headerText="Добро пожаловать в квиз от лучшего учебного центра" textType="" />
          <form className="welcome__form">

            <AddLabel
              labelText="Ваше имя"
              labelName="username"
              labelType="text"
              labelPlaceholder="Ваш ответ"
              labelError="Введите имя в правильном формате"
              inputValue={name}
              inputChange={setName}
              hasError={nameError}
            />
            <AddLabel
              labelText="Ваш номер"
              labelName="phone"
              labelType="tel"
              labelPlaceholder="+998 9- --- -- -- "
              labelError="Введите номер в правильном формате"
              inputValue={phone}
              inputChange={setPhone}
              hasError={phoneError}
            />
            <AddButton
              buttonClick={handleClick}
              buttonText="Далее"
              buttonType="button"
              isDisabled={buttonError}
            />

          </form>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
