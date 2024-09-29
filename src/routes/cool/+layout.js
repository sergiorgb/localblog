export const load = async ({ fetch }) => {
	const response = await fetch(`/api/postscool`)
	const posts = await response.json()

	return {
		posts
	}
}
