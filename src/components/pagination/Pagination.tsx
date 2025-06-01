import styles from "./Pagination.module.css";

type PaginationProps = {
	currentPage: number;
	totalPages: number;
	onPageChange: (page: number) => void;
};

export const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
	return (
		<div className={styles.container}>
			<button
				className={styles.button}
				disabled={currentPage === 1}
				onClick={() => onPageChange(currentPage - 1)}
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
			>
				Вперед
			</button>
		</div>
	);
};
