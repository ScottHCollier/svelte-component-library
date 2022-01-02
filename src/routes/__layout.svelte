<script>
	import Nav from '../components/header/Nav.svelte';
	import Footer from '../components/Footer.svelte';
</script>

<div class="app-container">
	<Nav />

	<div class="body-container">
		<slot />
	</div>

	<Footer />
</div>

<style lang="scss">
	:global(*) {
		margin: 0;
		padding: 0;
		font-family: 'Noto Sans Display', sans-serif;
		text-decoration: none;
	}

	:global(a) {
		color: $text-colour;
	}

	:global(li) {
		list-style: none;
	}

	// :global(body) {
	// 	overflow-x: hidden;
	// }
</style>
