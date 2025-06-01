'use client';

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useAppSelector } from "@/hooks/useAppSelector";
import { moviesSliceActions } from "@/store/slices/moviesSlice";
import { MoviesList } from "@/components/movieList/MoviesList";
import { Pagination } from "@/components/pagination/Pagination";
import styles from './SearchResultsPage.module.css';

export default function SearchResultsPage() {
	const searchParams = useSearchParams();
	const query = searchParams.get("query") || "";
	const dispatch = useAppDispatch();
	const { searchResults, currentPage, totalPages } = useAppSelector(
		(state) => state.moviesSlice
	);

	useEffect(() => {
		if (query) {
			dispatch(moviesSliceActions.searchMovies({ query, page: currentPage }));
		}
	}, [dispatch, query, currentPage]);

	const handlePageChange = (page: number) => {
		dispatch(moviesSliceActions.setPage(page));
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	if (!searchResults.length) {
		return <div className={styles.notFound}>Нічого не знайдено</div>;
	}

	return (
		<div className={styles.wrapper}>
			<h2 className={styles.title}>
				Результати пошуку: <span className={styles.highlight}>{query}</span>
			</h2>
			<MoviesList movies={searchResults} />
			<Pagination
				currentPage={currentPage}
				totalPages={totalPages}
				onPageChange={handlePageChange}
			/>
		</div>
	);
}
