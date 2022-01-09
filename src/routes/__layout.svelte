<script>
	import Header from '../components/General/Header.svelte';
	import Footer from '../components/General/Footer.svelte';

	import '../resources/sass/global.scss';
</script>

<div class="app-container">
	<Header fullWidth />

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
