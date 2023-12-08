import axios from "axios";
import React, { useEffect, useState } from "react";
import RestaurantCard from "../Components/RestaurantCard";

const Restaurant = () => {
  const [data, setData] = useState([]);
  const [sortByRating, setSortByRating] = useState(false);
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://restaurant-api.dicoding.dev/list"
      );

      setData(response.data.restaurants);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();

    return () => {};
  }, []);

  const sortByRatingHandler = () => {
    const sortedByRating = [...data].sort((a, b) =>
      sortByRating ? a.rating - b.rating : b.rating - a.rating
    );

    setData(sortedByRating);
    setSortByRating(!sortByRating);
  };

  const clearAllHandler = () => {
    fetchData();
    setSortByRating(false);
  };

  return (
    <div>
      <div className="border-t-2 border-b-2 border-slate-300 mb-8">
        <div className="flex space-x-8 justify-between py-4 mx-12 items-center">
          <div className="flex space-x-8">
            <p>Filter By :</p>
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
              <li>
                <button
                  onClick={sortByRatingHandler}
                  className="border-b-2 border-black"
                >
                  Rating
                </button>
              </li>
            </ul>
          </div>
          <button
            onClick={clearAllHandler}
            className="border-2 border-slate-400 text-slate-400 px-8 py-2 hover:bg-black hover:text-white hover:border-black"
          >
            Clear All
          </button>
        </div>
      </div>
      <div className="w-3/4 mx-auto">
        <div className="grid grid-cols-4 gap-4">
          {data?.map((restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
