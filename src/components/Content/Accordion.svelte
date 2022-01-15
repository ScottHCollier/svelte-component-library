<script>
	import Item from './Item.svelte';

	export let secondary = false;

	const data = {
		iOS: [1, 2, 3],
		Android: [4, 5, 6, 7, 8, 9, 10, 11],
		Windows: [12, 24, 42]
	};
</script>

<div class="accordion {secondary ? 'secondary' : ''}">
	{#each Object.entries(data) as entry}
		<Item {entry} {secondary} />
	{/each}
</div>

<style lang="scss">
	.accordion {
		width: 100%;
		border-bottom: 2px solid $secondary;

		&.secondary {
			border-bottom: 2px solid $primary;
		}
	}
</style>
