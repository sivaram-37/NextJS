"use client";

import Link from "next/link";
import styles from "./MealPageHeader.module.css";

function MealPageHeader() {
	return (
		<header className={styles.header}>
			<h1>
				Delicious Meals, created <span className={styles.highlight}>by you</span>
			</h1>
			<p>Choose your favorite recipe and cook it yourself. It is easy and fun!</p>
			<p className={styles.cta}>
				<Link href="/meals/share">Share Your Favorite Recipe</Link>
			</p>
		</header>
	);
}

export default MealPageHeader;
