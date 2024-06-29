// src/components/ReviewList.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ReviewList = ({ reviews }) => {
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
      <h2>Reviews</h2>
      {reviews.length > 0 ? (
        reviews.map(review => (
          <div key={review.id}>
            <p>Rating: {review.rating}</p>
            <p>{review.review}</p>
          </div>
        ))
      ) : (
        <p>No reviews yet</p>
      )}
    </div>
    <button type="logout">Logout</button>
    </form>
    
  );
};

export default ReviewList;
