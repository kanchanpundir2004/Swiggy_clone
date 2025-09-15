import { useEffect, useState } from "react";

export default function Restaurant() {
  const [restData, setRestData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const proxy = "https://cors-anywhere.herokuapp.com/";
        const api =
          "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=16866";

        const response = await fetch(proxy + api);
        if (!response.ok) throw new Error(`HTTP error ${response.status}`);

        const data = await response.json();
        console.log("Full response:", data);

        const info = data?.data?.cards?.[2]?.card?.card?.info;
        setRestData(info || {});
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    // fetchData();
  }, []);

  return (
    <div className="flex flex-wrap max-w-[80%] m-auto mt-10">
      {restData.map((restInfo) => {
        <RestCard key={restInfo.id} restInfo={restInfo}></RestCard>;
      })}
    </div>
  );
}
