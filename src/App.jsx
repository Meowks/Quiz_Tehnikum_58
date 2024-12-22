import React from "react";
import Welcome from "./pages/Welcome";
import "./styles/main.css";
import StepOne from "./pages/StepOne";
import StepTwo from "./pages/StepTwo";

const App = () => {
  return (
    <div className="App">
      {/* <Welcome /> */}
      <StepOne />
    </div>
  );
};

export default App;
