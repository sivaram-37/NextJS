"use client";

import SubmitButton from "@/components/SubmitButton";
import { createPost } from "@/lib/actions";
import { useFormState } from "react-dom";
import { HiOutlineExclamationCircle } from "react-icons/hi";

export default function CreatePostForm() {
	const [state, formAction] = useFormState(createPost, {});

	return (
		<form action={formAction}>
			<p className="form-control">
				<label htmlFor="title">Title</label>
				<input type="text" id="title" name="title" />
			</p>
			<p className="form-control">
				<label htmlFor="image">Image URL</label>
				<input type="file" accept="image/png, image/jpeg" id="image" name="image" />
			</p>
			<p className="form-control">
				<label htmlFor="content">Content</label>
				<textarea id="content" name="content" rows="5" />
			</p>
			<p className="form-actions">
				<SubmitButton />
			</p>

			{state.errors && (
				<ul className="form-errors">
					{state?.errors.map((err) => (
						<li key={err}>
							<HiOutlineExclamationCircle className="icon" />
							{err}
						</li>
					))}
				</ul>
			)}
		</form>
	);
}
