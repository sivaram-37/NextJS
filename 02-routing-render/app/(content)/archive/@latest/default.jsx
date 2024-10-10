import NewsList from "@/components/NewsList";
import { getLatestNews } from "@/lib/helper";

export default async function LatestPage() {
	const news = await getLatestNews();

	return (
		<div>
			<h2>Latest News</h2>
			<NewsList news={news} />
		</div>
	);
}
