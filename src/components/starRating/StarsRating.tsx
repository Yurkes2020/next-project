"use client";

import React from 'react';
import StarRatings from 'react-star-ratings';
import styles from './StarsRating.module.css';

interface StarsRatingProps {
	rating: number;
}

export const StarsRating: React.FC<StarsRatingProps> = ({ rating }) => {
	return (
		<div className={styles.starsContainer}>
			<StarRatings
				rating={rating}
				starRatedColor="yellow"
				starEmptyColor="gray"
				numberOfStars={10}
				starDimension="20px"
				starSpacing="5px"
			/>
		</div>
	);
};
