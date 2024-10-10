import NewsList from "@/components/NewsList";
import {
	getAvailableNewsMonths,
	getAvailableNewsYears,
	getNewsForYear,
	getNewsForYearAndMonth,
} from "@/lib/helper";
import Link from "next/link";
import { Suspense } from "react";

async function FilteredNews({ year, month }) {
	let news;

	if (year && !month) {
		news = await getNewsForYear(year);
	} else if (year && month) {
		news = await getNewsForYearAndMonth(year, month);
	}

	let newsContent = <p>No News found for the selected period.</p>;
	if (news && news.length > 0) {
		newsContent = <NewsList news={news} />;
	}

	return newsContent;
}

async function FilterHeader({ year, month }) {
	const availableYears = await getAvailableNewsYears();
	let links = availableYears;

	if (year && !month) {
		links = getAvailableNewsMonths(year);
	} else if (year && month) {
		links = [];
	}

	if (
		(year && !availableYears.includes(year)) ||
		(month && !getAvailableNewsMonths(year).includes(month))
	) {
		throw new Error("Invalid Path Filter");
	}

	return (
		<header id="archive-header">
			<ul>
				{links.map((link) => {
					const href = year ? `/archive/${year}/${link}` : `/archive/${link}`;
					return (
						<li key={link}>
							<Link href={href}>{link}</Link>
						</li>
					);
				})}
			</ul>
		</header>
	);
}

export default async function ForAYear({ params }) {
	const filter = params.filter;
	const selectedYear = filter?.[0];
	const selectedMonth = filter?.[1];

	return (
		<>
			<Suspense fallback={<p>Loading News...</p>}>
				<FilterHeader year={selectedYear} month={selectedMonth} />
				<FilteredNews year={selectedYear} month={selectedMonth} />
			</Suspense>
		</>
	);
}
