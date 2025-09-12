// export default function Dinecard({ foodData }) {
//   return (
//     <div className="max-w-sm flex-none object-cover rounded-3xl shadow-2xl gap-2 relative">
//       <div>
//         <img
//           className="rounded-t-3xl w-110 h-60 object-cover"
//           src={
//             "https://media-assets.swiggy.com/swiggy/image/upload/" +
//             foodData?.info?.mediaFiles?.[0]?.url
//           }
//           alt=""
//         />
//         <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black to-transparent rounded-b-md z-10"></div>

//         {/* Text overlays */}
//         <p className="absolute bottom-3 left-4 text-lg font-semibold text-white z-20 max-w-[80%]">
//           {foodData?.info?.name}
//         </p>
//         <p className="absolute bottom-3 right-4 text-lg font-semibold text-white z-20">
//           ⭐ {foodData?.info?.rating?.value}
//         </p>

//       </div>
//     </div>
//   );
// }

export default function Dinecard({ foodData }) {
  const imageUrl =
    "https://media-assets.swiggy.com/swiggy/image/upload/" +
    foodData?.info?.mediaFiles?.[0]?.url;

  const offer =
    foodData?.info?.vendorOffer?.otherOffersInfo?.[0]?.title || null;

  const restaurantLink = foodData?.cta?.link || "#";

  return (
    <a
      href={restaurantLink}
      target="_blank"
      rel="noopener noreferrer"
      className="max-w-sm flex-none rounded-3xl shadow-xl overflow-hidden relative hover:scale-105 transition-transform duration-300"
    >
      {/* Image */}
      <div className="relative">
        <img
          className="w-full h-60 object-cover"
          src={imageUrl}
          alt={foodData?.info?.name}
        />

        {/* Gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black to-transparent z-10"></div>

        {/* Name & Rating */}
        <p className="absolute bottom-3 left-4 text-lg font-semibold text-white z-20 max-w-[70%]">
          {foodData?.info?.name}
        </p>
        <span className="absolute bottom-3 right-4 text-sm font-semibold text-white bg-black/60 px-2 py-1 rounded-md z-20">
          ⭐ {foodData?.info?.rating?.value}
        </span>

        {/* Offer Badge */}
        {offer && (
          <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-md z-20">
            {offer}
          </span>
        )}
      </div>

      {/* Bottom Content */}
      <div className="p-4 bg-white">
        <p className="text-md text-gray-600">📍 {foodData?.info?.locality}</p>
        <p className="text-md text-gray-600 mt-1">
          🍽️ {foodData?.info?.cuisines?.join(", ")}
        </p>
        <p className="text-xl font-semibold mt-2 bg-[#1ba672] text-white p-3 rounded-2xl">
          {foodData?.info?.costForTwo}
        </p>
      </div>
    </a>
  );
}
