import React from "react";
import Header from "../components/Header";
import { AddLabel } from "../components/AddLabel";
import { AddButton } from "../components/AddButton";

const Welcome = () => {
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
              labelError="Введите имя в правильном формате например"
            />
            <AddLabel
              labelText="Ваш номер"
              labelName="phone"
              labelType="tel"
              labelPlaceholder="+998 9- --- -- -- "
              labelError="Введите номер в правильном формате"
            />
            <AddButton
              buttonText="Далее"
              isDisabled={true}
              buttonType="submit"
            />

          </form>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
