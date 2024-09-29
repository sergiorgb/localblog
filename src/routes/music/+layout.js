export const load = async ({ fetch }) => {
	const response = await fetch(`/api/postsmusic`)
	const posts = await response.json()

	return {
		posts
	}
}
