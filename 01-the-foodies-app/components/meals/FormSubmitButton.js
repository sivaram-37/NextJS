"use client";

import { useFormStatus } from "react-dom";

function FormSubmitButton() {
	const { pending } = useFormStatus();

	return (
		<button disabled={pending} type="submit">
			{pending ? "Submiting..." : "Share Meal"}
		</button>
	);
}

export default FormSubmitButton;
