import React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { AiOutlineStar } from 'react-icons/ai';
import './Rating.css';

const Rating = ({ stars }) => {
  const ratingStar = Array.from({ length: 5 }, (ele, index) => {
    let number = index + 0.5;
    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <FaStar className="star-icon" />
        ) : stars >= number ? (
          <FaStarHalfAlt className="star-icon" />
        ) : (
          <AiOutlineStar className="star-icon2" />
        )}
      </span>
    );
  });

  return <div className="rating-container">{ratingStar}</div>;
};

export default Rating;
