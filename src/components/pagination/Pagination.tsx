"use client";

import styles from "./Pagination.module.css";
import {useRouter, useSearchParams} from "next/navigation";

type PaginationProps = {
	currentPage: number;
	totalPages: number;
	basePath: string;
};

export const Pagination = ({currentPage, totalPages, basePath}: PaginationProps) => {


	const router = useRouter();
	const searchParams = useSearchParams();

	const onPageChange = (page: number) => {
		if (page < 1 || page > totalPages) return;

		const params = new URLSearchParams(searchParams.toString());
		params.set("page", page.toString());

		router.push(`${basePath}?${params.toString()}`);

		window.scrollTo({top: 0, behavior: "smooth"});
	};

	return (
		<div className={styles.container}>
			<button
				className={styles.button}
				disabled={currentPage === 1}
				onClick={() => onPageChange(currentPage - 1)}
				aria-label="Попередня сторінка"
			>
				Назад
			</button>
			<span className={styles.pageInfo}>
        {currentPage} / {totalPages}
      </span>
			<button
				className={styles.button}
				disabled={currentPage === totalPages}
				onClick={() => onPageChange(currentPage + 1)}
				aria-label="Наступна сторінка"
			>
				Вперед
			</button>
		</div>
	);
};
