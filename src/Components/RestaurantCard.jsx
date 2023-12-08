// Restaurant.js
import React from "react";
import { useNavigate } from "react-router-dom";
import { Star } from "lucide-react";

const RestaurantCard = ({ restaurant }) => {
  const navigate = useNavigate();

  const handleButtonClick = (id) => {
    navigate(`/${id}`);
  };
  return (
    <div className="w-56 m-4" key={restaurant.id}>
      <div className="h-44">
        <img
          className="w-full h-full"
          src={`https://restaurant-api.dicoding.dev/images/medium/${restaurant.pictureId}`}
          alt=""
        />
      </div>
      <p>{restaurant.name}</p>
      <div className="flex items-center gap-2">
        <Star size={20} fill="yellow" className="text-yellow-500" />
        <span className="text-md font-semibold">{restaurant.rating}</span>
      </div>
      <button
        onClick={() => handleButtonClick(restaurant.id)}
        className="mt-5 py-2 text-white w-full mx-auto bg-blue-900"
      >
        LEARN MORE
      </button>
    </div>
  );
};

export default RestaurantCard;
