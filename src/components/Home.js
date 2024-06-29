
import React, { useState } from 'react';
import axios from 'axios';
import BreweryList from './BreweryList';

const Home = () => {
  const [city, setCity] = useState('');
  const [breweries, setBreweries] = useState([]);

  const searchBreweries = async () => {
    const response = await axios.get(`https://api.openbrewerydb.org/breweries?by_city=${city}`);
    setBreweries(response.data);
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
      <button onClick={searchBreweries}>Search</button>
      <BreweryList breweries={breweries} />
    </div>
  );
};

export default Home;
