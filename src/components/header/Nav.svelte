<script>
	import NavAdmin from './NavAdmin.svelte';
	import NavLinks from './NavLinks.svelte';
	import NavSlider from './NavSlider.svelte';

	let sliderMessages = [
		`Jaguar shark! So tell me - does it really exist?`,
		`God creates dinosaurs. God destroys dinosaurs. God creates Man. Man destroys God. Man creates Dinosaurs.`,
		`Just my luck, no ice.`,
		`Forget the fat lady! You're obsessed with the fat lady!`,
		`They're using our own satellites against us. And the clock is ticking.`
	];
</script>

<NavAdmin />

<nav class="nav">
	<div class="left-column"><img src="../src/assets/logo/logo.svg" alt="dinkedIn logo" /></div>
	<div class="center-column"><NavLinks /></div>
	<div class="right-column">&nbsp;</div>
</nav>

<NavSlider interval={4400} {sliderMessages} sliderInitial={sliderMessages[0]} />

<style lang="scss">
	.nav {
		background-color: $primary;
		display: flex;
		justify-content: space-between;
		align-items: center;
		color: white;
		position: sticky;
		top: 0px;
		z-index: 1;
		padding: 20px $nav-padding-width;

		.left-column,
		.right-column {
			width: 10%;
			display: flex;
			align-items: center;
		}

		.left-column {
			justify-content: flex-start;
		}

		.right-column {
			display: flex;
			justify-content: flex-end;
		}
	}
</style>
