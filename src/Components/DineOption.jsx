import { dineoutRestaurants } from "../Utils/Dineout";
import Dinecard from "./Dinecard";
export default function DineOption() {
  return (
    <>
      <div className=" w-[80%] container mx-auto mt-20 mb-20 ">
        <h1 className="text-4xl font-bold mb-6 ">
          Discover best restaurants on Dineout
        </h1>
        <div className="container mx-auto flex flex-nowrap  gap-10 justify-center overflow-x-auto">
          {dineoutRestaurants?.map((foodData) => (
            <Dinecard key={foodData.info.id} foodData={foodData}></Dinecard>
          ))}
        </div>
      </div>
    </>
  );
}
