import { GrocerGridCard } from "../Utils/Grocery";
import Grocerycard from "./GroceryCard";

export default function GroceryOption() {
  return (
    <div className=" w-[80%] container mx-auto mt-20 ">
      <h1 className="text-2xl font-bold mb-6 ">Shop Groceries on Instamart</h1>
      <div className="container mx-auto flex flex-nowrap  gap-10 justify-center overflow-x-auto">
        {GrocerGridCard.map((foodData) => (
          <Grocerycard key={foodData.id} foodData={foodData}></Grocerycard>
        ))}
      </div>
    </div>
  );
}
