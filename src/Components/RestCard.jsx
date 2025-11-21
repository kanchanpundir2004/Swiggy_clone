export default function RestCard({ restInfo }) {
  // Use optional chaining to safely access nested properties
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    restInfo?.info || {};

  // Don't render anything if the required data is missing
  if (!cloudinaryImageId) {
    return null;
  }

  return (
    <div className="rest-card p-4 w-[250px] bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer">
      <img
        className="rest-logo w-full h-[150px] object-cover rounded-lg mb-4"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/${cloudinaryImageId}`}
        alt={name}
      />
      <div className="card-content">
        <h3 className="text-lg font-bold truncate mb-1">{name}</h3>
        <h4 className="text-gray-600 text-sm mb-2 truncate">
          {cuisines?.join(", ")}
        </h4>
        <div className="flex items-center justify-between text-gray-700 font-medium text-sm">
          <span className="flex items-center">
            <span className="mr-1 text-yellow-500">★</span> {avgRating}
          </span>
          <span>•</span>
          <span>{sla?.deliveryTime} mins</span>
          <span>•</span>
          <span>{costForTwo}</span>
        </div>
      </div>
    </div>
  );
}
