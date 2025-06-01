import { useEffect } from "react";
import { moviesSliceActions } from "@/store/slices/moviesSlice";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useAppSelector } from "@/hooks/useAppSelector";
import Link from "next/link";
import styles from "./GenresBadge.module.css";

const { getGenres } = moviesSliceActions;

export const GenresBadge = () => {
	const dispatch = useAppDispatch();
	const { genres } = useAppSelector((state) => state.moviesSlice);

	useEffect(() => {
		dispatch(getGenres());
	}, [dispatch]);

	return (
		<div className={styles.container}>
			{genres.map((genre) => (
				<Link
					href={`/genre/${genre.id}`}
					key={genre.id}
					className={styles.badge}
				>
					{genre.name}
				</Link>
			))}
		</div>
	);
};
