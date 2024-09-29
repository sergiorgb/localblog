<script lang="ts">
	export let data
</script>

<article class="black">
	<h1 class="font-family: jtbrainsmono-thin;">{data.title}</h1>
	<svelte:component this={data.content} />
</article>

<style>
	.black {
		background-color: #000000;
	}
</style>
