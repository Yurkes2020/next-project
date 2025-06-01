import Image from "next/image";
import styles from "./PosterPreview.module.css";

type PosterPreviewProps = {
	posterPath: string | null;
	title: string;
};

export const PosterPreview = ({ posterPath, title}: PosterPreviewProps) => {
	const posterUrl = posterPath
		? `https://image.tmdb.org/t/p/w500${posterPath}`
		: "/no-image.png";

	return (
		<div className={styles.container}>
			<Image
				src={posterUrl}
				alt={title}
				fill
				sizes="(max-width: 768px) 100vw, 33vw"
				className={styles.image}
				priority
			/>
		</div>
	);
};
