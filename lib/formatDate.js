// takes in date string formatted "2021-06-12" and returns "12 June 2021"
export default function formatDate(date) {
	const articleDate = new Date(date);

	return `${articleDate.getDate()} ${articleDate.toLocaleString('en-us', {
		month: 'long'
	})} ${articleDate.getFullYear()}`;
}
