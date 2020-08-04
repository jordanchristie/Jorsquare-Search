import React, { useState } from "react";

const SearchBar = ({ fetchBreweries }) => {
  const [city, setCity] = useState("");

  const updateCity = (e) => {
    setCity(e.target.value);
  };

  const resetCity = () => {
    setCity("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (city !== "") {
      fetchBreweries(city);
    }

    resetCity();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Enter a City"
        onChange={updateCity}
        className="input-field col s6"
      />
    </form>
  );
};

export default SearchBar;
