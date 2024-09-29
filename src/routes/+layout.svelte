<script lang="ts">
	//export let data: LayoutData;
	import '../app.css'
</script>

<h1 style="text-align: center; font-family: srcodepro-it;">Vertigo's Local Blog</h1>
<div style="text-align: center; font-family: jtbrainsmono-regular">
	<ul style="display: inline-block; padding: 0; margin: 0;">
		<br />
		<a href="/life">Life Stuff</a>
		/
		<a href="/cool">Tech Stuff</a>
		/
		<a href="/music">Music Stuff</a>
		/
		<a href="/">About</a>
	</ul>
</div>
<hr />
<slot />

<hr />
<footer>Made with ♥ wih SvelteKit, Markdown and Netlify</footer>
