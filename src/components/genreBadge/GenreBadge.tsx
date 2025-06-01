

import Link from 'next/link';
import styles from './GenresBadge.module.css';

import { Genre } from '@/types/genreType';

type GenresBadgeProps = { genres: Genre[] };

export default function GenreBadge({genres}: GenresBadgeProps) {


	return (
		<div className={styles.container}>
			{genres.map((genre) => (
				<Link href={`/movies/genre/${genre.id}`} key={genre.id} className={styles.badge}>
					{genre.name}
				</Link>
			))}
		</div>
	);
}
