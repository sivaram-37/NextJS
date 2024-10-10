import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";
import fs from "node:fs";

const db = sql("meals.db");

export async function getMeals() {
	// Adding timer to simulate real data fetching experience
	await new Promise((resolve) => setTimeout(resolve, 2000));

	//throw new Error("Failed to fetch meals");
	return db.prepare("SELECT * FROM meals").all();
}

export function getMeal(slug) {
	return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}

export async function saveMeal(meal) {
	meal.slug = slugify(meal.title, { lower: true });
	meal.instructions = xss(meal.instructions);

	const imageExtension = meal.image.name.split(".").pop();
	const imageName = `${meal.slug}-${meal.creator_email}.${imageExtension}`;

	const stream = fs.createWriteStream(`public/images/${imageName}`);
	const bufferedImage = await meal.image.arrayBuffer();

	stream.write(Buffer.from(bufferedImage), (err) => {
		if (err) throw new Error("Saving Image Failed!");
	});

	meal.image = `/images/${imageName}`;

	db.prepare(
		`INSERT INTO meals (title,creator,creator_email,summary,instructions,slug,image) 
	VALUES (@title,@creator,@creator_email,@summary,@instructions,@slug,@image)`
	).run(meal);
}
