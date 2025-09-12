import { imageGridCards } from "../Utils/foodData";
import FoodCard from "./FoodCard";
export default function FoodOption() {
  return (
    <>
      <div className="w-[80%] container mx-auto flex flex-nowrap overflow-auto">
        {imageGridCards.info.map((foodData) => (
          <FoodCard key={foodData.id} foodData={foodData}></FoodCard>
        ))}
      </div>
    </>
  );
}
