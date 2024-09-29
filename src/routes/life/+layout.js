export const load = async ({ fetch }) => {
	const response = await fetch(`/api/postslife`)
	const posts = await response.json()

	return {
		posts
	}
}
