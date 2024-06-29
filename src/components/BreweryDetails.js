// src/components/BreweryDetails.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { firestore } from '../firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
import ReviewForm from './ReviewForm';
import ReviewList from './ReviewList';

const BreweryDetails = () => {
  const { id } = useParams();
  const [brewery, setBrewery] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBreweryDetails = async () => {
      try {
        const breweryResponse = await fetch(`https://api.openbrewerydb.org/breweries/${id}`);
        if (!breweryResponse.ok) {
          throw new Error('Failed to fetch brewery details');
        }
        const breweryData = await breweryResponse.json();
        setBrewery(breweryData);
      } catch (err) {
        setError(err.message);
      }
    };

    const fetchReviews = async () => {
      try {
        const reviewsQuery = query(collection(firestore, 'reviews'), where('breweryId', '==', id));
        const querySnapshot = await getDocs(reviewsQuery);
        const reviewsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setReviews(reviewsData);
      } catch (err) {
        setError(err.message);
      }
    };

    const fetchData = async () => {
      setLoading(true);
      await fetchBreweryDetails();
      await fetchReviews();
      setLoading(false);
    };

    fetchData();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      {brewery ? (
        <>
          <h1>{brewery.name}</h1>
          <p>{brewery.street}, {brewery.city}, {brewery.state}</p>
          <p>{brewery.phone}</p>
          <p><a href={brewery.website_url}>{brewery.website_url}</a></p>
          <ReviewForm breweryId={id} onReviewAdded={(newReview) => setReviews([...reviews, newReview])} />
          <ReviewList reviews={reviews} />
        </>
      ) : (
        <p>No brewery found</p>
      )}
    </div>
  );
};

export default BreweryDetails;
