// src/components/BreweryList.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const BreweryList = ({ breweries }) => {
  const navigate = useNavigate();
  const handleLog = async (e) => {
    e.preventDefault();
    try {
      navigate('/');
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <form onSubmit={handleLog}>
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
    <button type="logout">Logout</button>
    </form>
  );
};

export default BreweryList;
