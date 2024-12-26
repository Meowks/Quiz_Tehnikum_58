import React from "react";
import Welcome from "./pages/Welcome";
import StepOne from "./pages/StepOne";
import StepTwo from "./pages/StepTwo";
import StepThree from "./pages/StepThree";
import StepFour from "./pages/StepFour";
import Thanks from "./pages/Thanks"

import "./styles/main.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path:"/",
    element:<Welcome />
  },
  {
    path:"/step-one",
    element:<StepOne />
  },
  {
    path:"/step-two",
    element:<StepTwo />
  },
  {
    path:"/step-three",
    element:<StepThree />
  },
  {
    path:"/step-four",
    element:<StepFour />
  },
  {
    path:"/thanks",
    element:<Thanks />
  },
])

const App = () => {
  return (
    <RouterProvider router={router}>
      <div className="App"/>
    </RouterProvider>
    
  );
};

export default App;
