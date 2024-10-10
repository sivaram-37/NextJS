"use client";

import { useRef, useState } from "react";
import styles from "./ImagePicker.module.css";
import Image from "next/image";

function ImagePicker({ label, name }) {
	const inputImage = useRef();
	const [pickedImg, setPickedImg] = useState(null);

	function handlePickClick() {
		inputImage.current.click();
	}

	function handlePickImage(e) {
		const file = e.target.files[0];

		if (!file) {
			setPickedImg(null);
			return;
		}

		const fileReader = new FileReader();

		fileReader.onload = () => setPickedImg(fileReader.result);

		fileReader.readAsDataURL(file);
	}

	return (
		<div className={styles.picker}>
			<label htmlFor={name}>{label}</label>
			<div className={styles.controls}>
				<input
					className={styles.input}
					type="file"
					id={name}
					name={name}
					accept="image/png, image/jpeg"
					ref={inputImage}
					onChange={handlePickImage}
					required
				/>
				<div className={styles.preview}>
					{pickedImg ? (
						<Image src={pickedImg} alt="Image picked by the user." fill />
					) : (
						<p>No image picked yet.</p>
					)}
				</div>
				<button className={styles.button} type="button" onClick={handlePickClick}>
					Pick an Image
				</button>
			</div>
		</div>
	);
}

export default ImagePicker;
