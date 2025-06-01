
import Image from "next/image";
import { StarsRating } from "@/components/starRating/StarsRating";
import styles from "./MovieByIdPage.module.css";
import { moviesApi } from "@/api/moviesApi";

interface MovieByIdPageProps {
	params: Promise<{ id: string }> ;
}

export default async function MovieByIdPage({ params }: MovieByIdPageProps) {
	const {id} = await params;
	const movie = await moviesApi.fetchMovieById(Number(id));

	if (!movie) {
		return <div className={`${styles.container} ${styles.centerText}`}>No movie found.</div>;
	}

	return (
		<div className={`${styles.container} ${styles.spaced}`}>
			<Image
				src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
				alt={movie.title}
				width={500}
				height={750}
				className={styles.poster}
			/>
			<h1 className={styles.title}>{movie.title}</h1>
			<StarsRating rating={movie.vote_average} />
			<p className={styles.overview}>{movie.overview}</p>
		</div>
	);
}
