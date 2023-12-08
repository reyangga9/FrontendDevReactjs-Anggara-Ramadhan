import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../Components/Navbar";
import { Star } from "lucide-react";

const RestaurantDetail = () => {
  const [restaurant, setRestaurant] = useState(null);
  const [error, setError] = useState(null);

  const fetchRestaurantById = async () => {
    const path = window.location.pathname;
    const id = path.substr(1);
    try {
      const response = await axios.get(
        `https://restaurant-api.dicoding.dev/detail/${id}`
      );
      setRestaurant(response.data.restaurant);
    } catch (error) {
      setError("Error fetching restaurant details/the id is wrong");
    }
  };

  useEffect(() => {
    fetchRestaurantById();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  if (!restaurant) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar />
      <div className="mt-8 mx-auto max-w-3xl p-4 bg-white shadow-md rounded-md">
        <h1 className="text-3xl font-semibold mb-4">{restaurant.name}</h1>
        <img
          src={`https://restaurant-api.dicoding.dev/images/medium/${restaurant.pictureId}`}
          alt={restaurant.name}
          className="mb-4 rounded-md shadow-md"
        />
        <div className="text-lg mb-6">
          <p>{restaurant.description}</p>
          <p className="mt-4">
            <span className="font-semibold">City:</span> {restaurant.city}
          </p>
          <p>
            <span className="font-semibold">Address:</span> {restaurant.address}
          </p>
        </div>
        <div className="text-lg mb-6">
          <h2 className="font-semibold">Categories:</h2>
          <ul>
            {restaurant.categories.map((category, index) => (
              <li key={index}>{category.name}</li>
            ))}
          </ul>
        </div>
        <div className="text-lg mb-6">
          <h2 className="font-semibold">Menus:</h2>
          <div className="flex justify-around">
            <div>
              <h3 className="font-semibold ">Foods:</h3>
              <ul className="">
                {restaurant.menus.foods.map((food, index) => (
                  <li key={index}>{food.name}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Drinks:</h3>
              <ul>
                {restaurant.menus.drinks.map((drink, index) => (
                  <li key={index}>{drink.name}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="text-lg mb-6">
          <h2 className="font-semibold flex">Rating:</h2>

          <div className="flex items-center gap-2">
            <Star size={20} fill="yellow" className="text-yellow-500" />
            <span className="text-md font-semibold">{restaurant.rating}</span>
          </div>
        </div>
        <div className="text-lg mb-6">
          <h2 className="font-semibold">Customer Reviews:</h2>
          <ul>
            {restaurant.customerReviews.map((review, index) => (
              <li key={index} className="mb-4">
                <p className="font-semibold">{review.name}</p>
                <p>{review.review}</p>
                <p className="text-gray-500">{review.date}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetail;
