import React from "react";
import Header from "../components/Header";
import AddText from "../components/AddText";
import { AddButton } from "../components/AddButton";

const Thanks = () => {
  const data = JSON.parse(localStorage.getItem("userInfo")) || {}; // Защита от null
  const keyInfo = [
    "Имя",
    "Номер телефона",
    "Узнали о нас",
    "Курс",
    "Emoji",
    "На сколько знаком предмет"
  ];

  const keys = Object.keys(data); // Получаем ключи из объекта data

  return (
    <div className="container">
      <div className="wrapper">
        <div className="thanks">
          <img src="./img/bell.png" alt="bell" />

          <Header headerText="Спасибо за прохождение опроса!" textType="h1" />

          {/* Динамическое сопоставление keyInfo с ключами data */}
          {keys.map((key, index) => (
            <AddText
              key={index}
              addText={`${keyInfo[index] || key}: ${data[key] || "не указано"}`}
            />
          ))}
        
          <AddText addText="Получи свою скидку по ссылке ниже" />

          <AddButton
            buttonText="Получить ссылку"
            buttonType="button"
            buttonId="get-link"
          />
        </div>
      </div>
    </div>
  );
};

export default Thanks;