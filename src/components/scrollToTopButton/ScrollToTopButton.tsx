'use client'

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import styles from "./ScrollToTopButton.module.css";

export const ScrollToTopButton = () => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsVisible(window.scrollY > 300);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<button
			onClick={scrollToTop}
			className={`${styles.button} ${isVisible ? styles.visible : styles.hidden}`}
			aria-label="Повернутися вгору"
		>
			<ArrowUp className={styles.icon} />
		</button>
	);
};
