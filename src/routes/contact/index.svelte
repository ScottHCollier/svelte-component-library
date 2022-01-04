<script>
	import Container from '../../components/Atoms/Container.svelte';
	import HeroBanner from '../../components/Content/HeroBanner.svelte';
</script>

<Container fullWidth>
	<HeroBanner
		src="assets/default/person-three.png"
		headline="Contact."
		subtitle="Clever little subtitle."
		buttonText="Get in touch"
		href="/"
		colour="tertiary"
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
