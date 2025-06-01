'use client';
import React from 'react';
import styles from './StarsRating.module.css';

import dynamic from 'next/dynamic';
const StarRatings = dynamic(() => import('react-star-ratings'), { ssr: false });

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
