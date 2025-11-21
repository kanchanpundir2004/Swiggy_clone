import { useEffect, useState } from "react";
import RestCard from "./RestCard";

export default function Restaurant() {
  const [RestData, setRestData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const proxyServer = "https://cors-anywhere.herokuapp.com/";
      const swiggyAPI =
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true";

      try {
        const response = await fetch(proxyServer + swiggyAPI);
        const data = await response.json();

        // Find the card that contains the restaurant list
        const restaurantGrid = data?.data?.cards?.find(
          (card) => card?.card?.card?.id === "restaurant_grid_listing"
        );

        if (restaurantGrid) {
          // Set the state with the correct restaurant data
          setRestData(
            restaurantGrid?.card?.card?.gridElements?.infoWithStyle
              ?.restaurants || []
          );
        } else {
          console.error("Could not find restaurant data in the API response.");
          setRestData([]);
        }
      } catch (error) {
        console.error("Failed to fetch data:", error);
        setRestData([]);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="flex flex-wrap w-[80%] mx-auto mt-20 gap-5">
      {RestData.length > 0 ? (
        RestData.map((restaurant) => (
          <RestCard key={restaurant.info.id} restInfo={restaurant.info} />
        ))
      ) : (
        <p>Loading restaurants or no data available...</p>
      )}
    </div>
  );
}
