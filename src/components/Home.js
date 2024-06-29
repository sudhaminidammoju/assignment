// src/components/Home.js
import React, { useState } from 'react';
import axios from 'axios';
import BreweryList from './BreweryList';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Home = () => {
  const [city, setCity] = useState('');
  const [breweries, setBreweries] = useState([]);
  const navigate = useNavigate(); // Use useNavigate hook

  const searchBreweries = async () => {
    try {
      const response = await axios.get(`https://api.openbrewerydb.org/breweries?by_city=${city}`);
      setBreweries(response.data);
    } catch (error) {
      console.error('Error fetching breweries:', error);
    }
  };

  const handleSearch = () => {
    if (city.trim()) {
      searchBreweries();
    } else {
      alert('Please enter a city to search.');
    }
  };

  // Example navigation function
  const goToDetailsPage = (breweryId) => {
    navigate(`/brewery/${breweryId}`);
  };

  return (
    <div>
      <h1>Search Breweries by City</h1>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
      />
      <button onClick={handleSearch}>Search</button>
      <BreweryList breweries={breweries} onBreweryClick={goToDetailsPage} />
    </div>
  );
};

export default Home;
