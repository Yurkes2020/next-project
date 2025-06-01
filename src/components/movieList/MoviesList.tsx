import { MoviesListCard } from "../movieListCard/MoviesListCard";
import { MovieType } from "@/types/movieType";
import styles from "./MoviesList.module.css";

type Props = {
	movies: MovieType[];
};

export const MoviesList = ({ movies }: Props) => {
	return (
		<div className={styles.gridContainer}>
			{movies.map((movie) => (
				<MoviesListCard key={movie.id} movie={movie} />
			))}
		</div>
	);
};
