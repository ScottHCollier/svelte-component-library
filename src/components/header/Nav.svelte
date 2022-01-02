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
	<div class="left-column">SC</div>
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
		position: sticky;
		top: 0px;
		z-index: 1;
		padding: 5px $nav-padding-width;
		color: $black;

		.left-column,
		.right-column {
			width: 10%;
			display: flex;
			align-items: center;
		}

		.left-column {
			justify-content: flex-start;
			font-size: $font-headline-medium;
			font-weight: $font-bold;
		}

		.right-column {
			display: flex;
			justify-content: flex-end;
		}
	}
</style>
