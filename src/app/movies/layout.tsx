
import { ReactNode } from "react";

import styles from "./MoviesLayout.module.css";
import {moviesApi} from "@/api/moviesApi";
import GenreBadge from "@/components/genreBadge/GenreBadge";

export default  async  function MoviesLayout({ children }: { children: ReactNode }) {

	const genres = await moviesApi.fetchGenres();



	return (
		<div className={styles.layout}>
			<GenreBadge genres={genres} />
			<div className={styles.content}>
				{children}
			</div>
		</div>
	);
}
