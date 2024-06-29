// src/App.js
import React, { useState, useEffect } from 'react';
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/Home';
import BreweryDetails from './components/BreweryDetails';
import SignUp from './components/SignUp';
import Login from './components/Login';
import { auth } from './firebase'; // Import Firebase authentication
import './App.css'

const App = () => {
  // eslint-disable-next-line
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <div className="App">
        <Routes>
        <Route path="/" element={<Login setUser={setUser} />} />
        <Route path="/brewery/:id" element={<BreweryDetails />} />
          <Route path="/signup" element={<SignUp setUser={setUser} />} />
          <Route path="/home" element={<Home setUser={setUser} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
