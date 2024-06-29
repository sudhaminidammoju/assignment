// src/components/ReviewList.js
import React from 'react';

const ReviewList = ({ reviews }) => {
  return (
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
  );
};

export default ReviewList;
