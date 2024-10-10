"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./mealdb";
import { revalidatePath } from "next/cache";

function isInvalidText(text) {
	return !text || text.trim() === "";
}

export async function handleFormSubmit(prevState, formData) {
	const meal = {
		title: formData.get("title"),
		creator: formData.get("name"),
		creator_email: formData.get("email"),
		summary: formData.get("summary"),
		instructions: formData.get("instructions"),
		image: formData.get("image"),
	};

	if (
		isInvalidText(meal.title) ||
		isInvalidText(meal.summary) ||
		isInvalidText(meal.creator) ||
		isInvalidText(meal.instructions) ||
		isInvalidText(meal.creator_email) ||
		!meal.creator_email.includes("@") ||
		!meal.image ||
		meal.image.size === 0
	) {
		return { message: "! There are some missing input field" };
	}

	await saveMeal(meal);
	revalidatePath("/meals");
	redirect("/meals");
}
