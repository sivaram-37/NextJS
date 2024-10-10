import { getNewsItem } from "@/lib/helper";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function page({ params }) {
	const slug = params.newsSlug;
	const newsItem = await getNewsItem(slug);

	if (!newsItem) notFound();

	return (
		<article className="news-article">
			<header>
				<Link href={`/news/${newsItem.slug}/image`}>
					<img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
				</Link>
				<h1>{newsItem.title}</h1>
				<time dateTime={newsItem.date}>{newsItem.date}</time>
			</header>
			<main>
				<p>{newsItem.content}</p>
			</main>
		</article>
	);
}
