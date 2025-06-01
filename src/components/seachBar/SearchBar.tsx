"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import styles from "./SearchBar.module.css";

export const SearchBar = () => {
	const [query, setQuery] = useState("");
	const router = useRouter();

	const handleSearch = (e: FormEvent) => {
		e.preventDefault();
		if (query.trim()) {
			router.push(`/search?query=${encodeURIComponent(query.trim())}`);
			setQuery("");
		}
	};

	return (
		<form onSubmit={handleSearch} className={styles.form}>
			<input
				type="text"
				placeholder="Пошук фільмів..."
				value={query}
				onChange={(e) => setQuery(e.target.value)}
				className={styles.input}
			/>
			<button type="submit" className={styles.button}>
				Пошук
			</button>
		</form>
	);
};
