import React from 'react';
import styles from './MovieInfo.module.css';

type MovieInfoProps = {
	title: string;
	overview: string;
};

export const MovieInfo: React.FC<MovieInfoProps> = ({ title, overview }) => {
	return (
		<div className={styles.container}>
			<h2 className={styles.title}>{title}</h2>
			<p className={styles.overview}>{overview}</p>
		</div>
	);
};
