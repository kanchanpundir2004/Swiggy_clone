export default function GroceryCard({ foodData }) {
  return (
    <div className="m-4 text-center hover:scale-105 transition-transform flex-none ">
      <a
        href={foodData?.action?.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="h-50 w-50 object-cover mx-auto rounded-md shadow-md"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/" +
            foodData?.imageId
          }
          alt={foodData?.action?.text}
        />
      </a>
      <h2 className="mt-2 text-lg font-semibold text-gray-800">
        {foodData?.action?.text}
      </h2>
    </div>
  );
}

// export default function Grocerycard({ foodData }) {
//   return (
//     <a href={foodData?.action?.link}>
//       <img
//         className="w-40 h-50 object-cover"
//         src={
//           "https://media-assets.swiggy.com/swiggy/image/upload/" +
//           foodData?.imageId
//         }
//       ></img>
//     </a>
//   );
// }
