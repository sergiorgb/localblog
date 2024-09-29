<script>
	export let data
</script>

<div class="posts">
	<aside>
		<h4 style="font-family: jtbrainsmono-thin">/music/</h4>
		<nav class="postgap">
			{#each data.posts as post}
				<li style="font-family: srcodepro;">
					<a href={post.path}>
						{post.meta.title}
					</a>
					<hr />
				</li>
			{/each}
		</nav>
	</aside>
	<hr class="postblshow" />
	<main><slot /></main>
</div>

<style>
	.posts {
		display: grid;
		gap: 2rem;
		grid-template-columns: 200px auto;
		margin-top: 2rem;
	}
	@media (max-width: 700px) {
		.posts {
			display: block;
		}
		.postgap {
			margin-bottom: 1rem;
		}
		.postblshow {
			display: block;
		}
	}
	@media (min-width: 700px) {
		.postblshow {
			display: none;
		}
	}
</style>
