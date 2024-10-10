import { getNewsItem } from "@/lib/helper";
import { notFound } from "next/navigation";

export default async function NewsImage({ params }) {
	const newsItemSlug = params.newsSlug;
	const newsItem = await getNewsItem(newsItemSlug);

	if (!newsItem) notFound();

	return (
		<div className="fullscreen-image">
			<img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
		</div>
	);
}
