// src/components/ReviewForm.js
import React, { useState } from 'react';
import { firestore } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';

const ReviewForm = ({ breweryId, onReviewAdded }) => {
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(firestore, 'reviews'), {
        breweryId,
        review,
        rating,
        createdAt: new Date()
      });
      onReviewAdded({ id: docRef.id, breweryId, review, rating, createdAt: new Date() });
      setReview('');
      setRating(0);
    } catch (err) {
      console.error('Error adding review: ', err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea value={review} onChange={(e) => setReview(e.target.value)} placeholder="Write your review" required />
      <input type="number" value={rating} onChange={(e) => setRating(parseInt(e.target.value, 10))} placeholder="Rating" min="0" max="5" required />
      <button type="submit">Submit Review</button>
    </form>
  );
};

export default ReviewForm;
