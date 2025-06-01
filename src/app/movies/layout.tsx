
import { ReactNode } from "react";
import { GenresBadge } from "@/components/genreBadge/GenreBadge";
import styles from "./MoviesLayout.module.css";

export default function MoviesLayout({ children }: { children: ReactNode }) {
	return (
		<div className={styles.layout}>
			<GenresBadge />
			<div className={styles.content}>
				{children}
			</div>
		</div>
	);
}
