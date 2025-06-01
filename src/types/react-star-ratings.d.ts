declare module 'react-star-ratings' {
	interface StarRatingsProps {
		rating: number;
		starRatedColor?: string;
		starEmptyColor?: string;
		numberOfStars?: number;
		starDimension?: string;
		starSpacing?: string;
	}

	const StarRatings: React.FC<StarRatingsProps>;

	export default StarRatings;
}
