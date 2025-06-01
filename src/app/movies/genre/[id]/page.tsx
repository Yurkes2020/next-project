import { MoviesList } from "@/components/movieList/MoviesList";
import { Pagination } from "@/components/pagination/Pagination";
import { moviesApi } from "@/api/moviesApi";
import styles from "./MoviesByGenrePage.module.css";
import {SearchParams} from "next/dist/server/request/search-params";




interface MoviesPageProps {
	searchParams: Promise<SearchParams>;
	params: Promise<{ id: string }> ;

}

export default async function MoviesByGenrePage({ searchParams,params }: MoviesPageProps) {
	const search = await searchParams;
	const currentPage = Number(search?.page) || 1;

	const awaitedParams = await params;
	const { id } = awaitedParams;

	try {
		const moviesData = await moviesApi.fetchMoviesByGenre(Number(id), currentPage);
		const movies = moviesData.results;
		const totalPages = moviesData.total_pages;


		if (!movies || movies.length === 0) {
			return <div className={styles.container}>No movies found for this genre.</div>;
		}

		return (
			<div className={styles.container}>
				<MoviesList movies={movies} />
				<Pagination currentPage={currentPage} totalPages={totalPages} basePath={`/movies/genre/${id}`} />
			</div>
		);
	} catch (error) {
		console.error("Error loading genre movies:", error);
		return <div className={styles.container}>Error loading movies for this genre.</div>;
	}
}
