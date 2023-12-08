import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../Components/Navbar";
import RestaurantCard from "../Components/RestaurantCard";

const SearchRestaurant = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://restaurant-api.dicoding.dev/search?q=${searchQuery}`
      );
      setSearchResults(response.data.restaurants);
    } catch (error) {
      setError("Error fetching data");
    }
  };

  useEffect(() => {
    if (searchQuery.trim() !== "") {
      handleSearch();
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  return (
    <div>
      <Navbar />
      <div className="mt-8 mx-auto max-w-3xl">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search restaurants... by name"
          className="border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:ring focus:border-blue-500"
        />
        {error && <p className="text-red-500">{error}</p>}
        <div className="grid grid-cols-3 ">
          {searchResults.map((restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchRestaurant;
