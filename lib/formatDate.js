// takes in date string formatted "2021-06-12" and returns "12 June 2021"
export default function formatDate(date, locale) {
	const articleDate = new Date(date);

	return `${articleDate.getDate()} ${articleDate.toLocaleString(locale, {
		month: 'long'
	})} ${articleDate.getFullYear()}`;
}
