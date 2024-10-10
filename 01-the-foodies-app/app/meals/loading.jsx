import styles from "./loading.module.css";

function loading() {
	return <p className={styles.loading}>Fetching meals...</p>;
}

export default loading;
