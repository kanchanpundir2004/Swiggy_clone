import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import FoodOption from "./Components/FoodOption";
import GroceryOption from "./Components/GroceryOption";
import DineOption from "./Components/DineOption";

function App() {
  console.log("open");
  return (
    <>
      <Header />
      <FoodOption></FoodOption>
      <GroceryOption></GroceryOption>
      <DineOption></DineOption>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
