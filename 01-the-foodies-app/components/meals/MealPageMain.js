import MealGrid from "@/components/meals/MealGrid";
import { getMeals } from "@/lib/mealdb";

export default async function MealPageMain() {
	const meals = await getMeals();

	return (
		<main>
			<MealGrid meals={meals} />
		</main>
	);
}
