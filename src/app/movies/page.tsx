import { MoviesList } from "@/components/movieList/MoviesList";
import { Pagination } from "@/components/pagination/Pagination";
import styles from "./MoviesPage.module.css";
import { moviesApi } from "@/api/moviesApi";
import { Metadata } from "next";
import {SearchParams} from "next/dist/server/request/search-params";

type MoviesPageProps ={
	searchParams: Promise<SearchParams>;
}

export const metadata: Metadata = {
	title: "Movies",
	description: "Browse latest movies",
};

export default async function MoviesPage({ searchParams }: MoviesPageProps) {
 const search = await searchParams;
	const currentPage = Number(search?.page) || 1;

	try {
		const moviesData = await moviesApi.fetchMovies(currentPage);

		if (!moviesData?.results?.length) {
			return <div className={styles.wrapper}>No movies found.</div>;
		}

		return (
			<div className={styles.wrapper}>
				<MoviesList movies={moviesData.results} />
				<Pagination currentPage={currentPage} totalPages={moviesData.total_pages} basePath="/movies" />
			</div>
		);
	} catch (error) {
		console.error('Error fetching genres:', error);
		return <div className={styles.wrapper}>Error loading movies.</div>;
	}
}
