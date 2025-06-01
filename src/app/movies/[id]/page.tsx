'use client';

import { useEffect } from "react";
import { useParams } from "next/navigation";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useAppSelector } from "@/hooks/useAppSelector";
import Image from "next/image";
import { StarsRating } from "@/components/starRating/StarsRating";
import { moviesSliceActions } from "@/store/slices/moviesSlice";
import styles from "./MovieByIdPage.module.css";

const { getMovieById } = moviesSliceActions;

export default function MovieByIdPage() {
	const { id } = useParams();
	const dispatch = useAppDispatch();
	const { movie, isLoading } = useAppSelector((state) => state.moviesSlice);

	useEffect(() => {
		if (id) {
			dispatch(getMovieById(Number(id)));
		}
	}, [id, dispatch]);

	if (isLoading) return <div className={`${styles.container} ${styles.centerText}`}>Loading...</div>;
	if (!movie) return <div className={`${styles.container} ${styles.centerText}`}>No movie found.</div>;

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
