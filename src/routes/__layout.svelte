<script>
	import Nav from '../components/header/Nav.svelte';
	import Footer from '../components/Footer.svelte';

	import '../styles/global.scss';
</script>

<div class="app-container">
	<Nav />

	<div class="body-container">
		<slot />
	</div>

	<Footer />
</div>

<style lang="scss">
	.body-container {
		overflow-x: hidden;
	}
</style>
