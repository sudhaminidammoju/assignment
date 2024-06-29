// src/components/BreweryList.js
import React from 'react';
import { Link } from 'react-router-dom';

const BreweryList = ({ breweries }) => {
  return (
    <div>
      <h2>Breweries</h2>
      <ul>
        {breweries.map((brewery) => (
          <li key={brewery.id}>
            <Link to={`/brewery/${brewery.id}`}>{brewery.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BreweryList;
