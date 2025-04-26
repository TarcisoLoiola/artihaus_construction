import React from 'react';

const RatingStarHandler = ({ value }) => {

    return (
        <div className="star-rating">
  <div className="stars">
    {[...Array(5)].map((_, i) => (
      <div key={i} className={`star ${i + 1 <= Math.floor(rating) ? 'full' : i < rating ? 'half' : ''}`} />
    ))}
  </div>
</div>
    )
};
export default RatingStarHadler