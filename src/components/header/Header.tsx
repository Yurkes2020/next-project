"use client";

import Link from "next/link";
import { SearchBar } from "@/components/seachBar/SearchBar";
import styles from "./Header.module.css";

export const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<Link href="/movies" className={styles.logo}>
					MovieBase
				</Link>

				<SearchBar  />

				<button className={styles.profileButton}>
					Профіль
				</button>
			</div>
		</header>
	);
};
