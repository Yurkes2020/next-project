import { MovieType } from "@/types/movieType";
import Link from "next/link";
import { PosterPreview } from "@/components/posterPrewiew/PosterPreview";
import { MovieInfo } from "@/components/movieInfo/MovieInfo";
import { StarsRating } from "@/components/starRating/StarsRating";
import styles from "./MoviesListCard.module.css";

type Props = {
	movie: MovieType;
};

export const MoviesListCard = ({ movie }: Props) => {
	const { poster_path, title, vote_average, overview } = movie;



	return (
		<div className={styles.card}>
			<Link href={`/movies/${movie.id}`}>
				<PosterPreview posterPath={poster_path} title={title} />
			</Link>
			<div className={styles.content}>
				<MovieInfo title={title} overview={overview} />
				<StarsRating rating={vote_average} />
			</div>
		</div>
	);
};
