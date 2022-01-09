<script>
	import CookiePolicy from '../User/CookiePolicy.svelte';
</script>

<footer>
	<span>TEST FOOTER</span>
	<CookiePolicy />
</footer>

<style lang="scss">
	footer {
		@include flex-box;
		padding: 50px;
		position: relative;
	}
</style>
