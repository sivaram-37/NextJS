import ModalBackdrop from "@/components/ModalBackdrop";
import { getNewsItem } from "@/lib/helper";
import { notFound } from "next/navigation";

export default async function InterceptedNewsImage({ params }) {
	const newsItemSlug = params.newsSlug;
	const newsItem = await getNewsItem(newsItemSlug);

	if (!newsItem) notFound();

	return (
		<>
			<ModalBackdrop />
			<dialog className="modal" open>
				<div className="fullscreen-image">
					<img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
				</div>
			</dialog>
		</>
	);
}
