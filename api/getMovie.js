import isEmpty from 'just-is-empty'
export default async function getMovie(queryObj) {
	if (isEmpty(queryObj)) return;
	const obj = { ...queryObj, apikey: process.env.NEXT_PUBLIC_API_KEY };
	const query = new URLSearchParams(obj).toString();
	try {
		const res = await fetch(`https://www.omdbapi.com/?${query}`);
    const movie = await res.json()
		if (!isEmpty(movie) && movie.Response) {
      return movie
		}
	} catch (error) {
		return error;
	}
}
