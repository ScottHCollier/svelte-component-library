<script>
	import { slide } from 'svelte/transition';
	export let entry;
	export let secondary = false;

	let isOpen = false;
	const toggle = () => (isOpen = !isOpen);
</script>

<button class="button {secondary ? 'secondary' : ''} {isOpen ? 'active' : ''}" on:click={toggle}>
	{entry[0]}
</button>
{#if isOpen}
	<ul class={secondary ? 'secondary' : ''} transition:slide={{ duration: 300 }}>
		{#each entry[1] as item}
			<li>{item}</li>
		{/each}
	</ul>
{/if}

<style lang="scss">
	.button {
		width: 100%;
		background-color: $primary;
		border: 2px solid $secondary;
		display: block;
		color: $primary-text;
		font-size: $font-button;
		cursor: pointer;
		border-bottom: none;
		transition: all 300ms linear;

		&.active {
			background-color: $secondary;
			color: $secondary-text;
		}

		&.secondary {
			background-color: $secondary;
			border: 2px solid $primary;
			color: $secondary-text;
			border-bottom: none;

			&.active {
				background-color: $primary;
				color: $primary-text;
			}
		}
	}

	ul {
		border: 2px solid $secondary;
		border-bottom: none;
		padding: 5px;

		&.secondary {
			border: 2px solid $primary;
			border-bottom: none;
			color: $secondary-text;
		}
	}
</style>
