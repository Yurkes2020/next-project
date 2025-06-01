import { MoviesList } from "@/components/movieList/MoviesList";
import { Pagination } from "@/components/pagination/Pagination";
import { moviesApi } from "@/api/moviesApi";
import styles from "./SearchResultsPage.module.css";

interface SearchPageProps {
	searchParams?: Promise<{ query?: string; page?: string }>;
}

export default async function SearchResultsPage({ searchParams }: SearchPageProps) {

	const search = await searchParams;
	const query =  search?.query || "";
	const currentPage = search?.page ? parseInt(search.page, 10) : 1;

	if (!query) {
		return <div className={styles.notFound}>Введіть пошуковий запит</div>;
	}

	const moviesData = await moviesApi.searchMovies(query, currentPage);
	const searchResults = moviesData.results;
	const totalPages = moviesData.total_pages;

	if (searchResults.length === 0) {
		return <div className={styles.notFound}>Нічого не знайдено</div>;
	}

	return (
		<div className={styles.wrapper}>
			<h2 className={styles.title}>
				Результати пошуку: <span className={styles.highlight}>{query}</span>
			</h2>
			<MoviesList movies={searchResults} />
			<Pagination currentPage={currentPage} totalPages={totalPages} basePath="/search" />
		</div>
	);
}
