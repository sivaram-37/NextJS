import React, { Suspense } from "react";
import MealPageHeader from "@/components/meals/MealPageHeader";
import MealPageMain from "@/components/meals/MealPageMain";

export const metadata = {
	title: "NextLevel Food | All Meals",
	description: "Try some new recipes",
};

export default function MealsPage() {
	return (
		<>
			<MealPageHeader />
			<Suspense fallback={<loading />}>
				<MealPageMain />
			</Suspense>
		</>
	);
}
