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
      <div>
        <img
          className="max-w-full h-auto pb-15"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/seo/App_download_banner.png"
          alt=""
        />
      </div>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
