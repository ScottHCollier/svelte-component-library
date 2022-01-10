<script>
	import { slide } from 'svelte/transition';
	export let entry;
	let isOpen = false;
	const toggle = () => (isOpen = !isOpen);
</script>

<button class="button {isOpen ? 'active' : ''}" on:click={toggle}>
	{entry[0]}
</button>
{#if isOpen}
	<ul transition:slide={{ duration: 300 }}>
		{#each entry[1] as item}
			<li>{item}</li>
		{/each}
	</ul>
{/if}

<style lang="scss">
	.button {
		width: 100%;
		background-color: $primary-light;
		border: 2px solid $primary-dark;
		display: block;
		color: $primary-dark;
		font-size: $font-headline-medium;
		cursor: pointer;
		border-bottom: none;
		transition: all 300ms linear;

		&.active {
			background-color: $primary-dark;
			color: $white;
		}
	}

	ul {
		border: 2px solid $primary-dark;
		border-bottom: none;
	}
</style>
