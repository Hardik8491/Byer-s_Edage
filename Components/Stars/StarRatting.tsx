import { StarIcon } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import Rating from 'react-star-rating-component';

interface StarRatingProps {}

const StarRating: React.FC<StarRatingProps> = () => {
  const [rating, setRating] = useState(() => {
    // Generate a random value between 1 and 5
    return Math.floor(Math.random() * 5) + 1;
  });

  // Use useEffect to handle the random value after the initial render
  useEffect(() => {
    const randomValue = Math.floor(Math.random() * 5) + 1;
    setRating(randomValue);
  }, []); // Empty dependency array ensures this effect runs only once after the initial render

  const handleStarClick = () => {
    // Add your logic for handling star clicks here
  };


  return (
    <div>
      <Rating
      value={rating}
      onStarClick={() => handleStarClick()}
      starCount={5}
      starColor={'#ffb400'}
      emptyStarColor={'#ccc'}
      
      />

    </div>
  );
};

export default StarRating;