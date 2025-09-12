export default function FoodCard({ foodData }) {
  return (
    <>
      <a
        href={foodData?.action?.link}
        className=" flex-none h-auto w-auto m-auto mt-20 object-cover gap-3"
      >
        <img
          className="flex flex-wrap h-55 w-auto m-auto mt-20 object-cover gap-3"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/" +
            foodData?.imageId
          }
          alt=""
        />
      </a>
    </>
  );
}
