<script>
	import Item from './Item.svelte';
	const data = {
		foo: [1, 2, 3],
		bar: [4, 5, 6, 7, 8, 9, 10, 11],
		baz: [12, 24, 42]
	};
</script>

<div class="accordion">
	{#each Object.entries(data) as entry}
		<Item {entry} />
	{/each}
</div>

<style lang="scss">
	.accordion {
		width: 100%;
		border-bottom: 2px solid $primary-dark;
	}
</style>
