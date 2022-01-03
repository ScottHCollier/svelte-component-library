<script>
	import Container from '../../components/Container.svelte';
	import HeroBanner from '../../components/HeroBanner.svelte';
</script>

<Container fullWidth>
	<HeroBanner
		src="assets/default/person-one.png"
		headline="Blog."
		subtitle="Clever little subtitle."
		buttonText="Get in touch"
		href="/"
		colour="secondary"
	/>
</Container>

<Container>
	<HeroBanner
		src="assets/default/person-three.png"
		headline="Pink."
		subtitle="Clever little subtitle."
		buttonText="Get in touch"
		href="/"
		colour="fourth"
		reverse
	/>
</Container>

<style lang="scss">
</style>
