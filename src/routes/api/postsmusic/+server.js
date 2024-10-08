import { fetchMarkdownPosts } from '$lib/utilsmsc.js'
import { json } from '@sveltejs/kit'

export const GET = async () => {
	const allPosts = await fetchMarkdownPosts()

	const sortedPosts = allPosts.sort((a, b) => {
		// @ts-expect-error meta => any* type
		return new Date(b.meta.date) - new Date(a.meta.date)
	})

	return json(sortedPosts)
}
