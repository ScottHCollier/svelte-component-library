<script lang="ts">
	import { getContext } from 'svelte';
	export let label;
	export let name;
	let value = '';
	const { onBlur } = getContext('form');
</script>

<div class="group">
	<input
		class="form-input {value.length ? 'shrink' : ''}"
		bind:value
		{name}
		type="password"
		on:blur={onBlur}
	/>
	<label class="form-input-label {value.length ? 'shrink' : ''}" for={name}>{label}</label>
</div>

<style lang="scss">
	$sub-color: grey;
	$main-color: black;

	@mixin shrinkLabel {
		top: -14px;
		font-size: 12px;
		color: $main-color;
	}

	.group {
		position: relative;
		margin: 20px 0;

		.form-input {
			background: none;
			background-color: white;
			color: $sub-color;
			font-size: 18px;
			padding: 10px 10px 10px 5px;
			display: block;
			width: 100%;
			border: none;
			border-radius: 0;
			border-bottom: 1px solid $sub-color;

			&:focus {
				outline: none;
			}

			&:focus ~ .form-input-label {
				@include shrinkLabel();
			}
		}

		// input[type='password'] {
		// 	letter-spacing: 0.3em;
		// }

		.form-input-label {
			color: $sub-color;
			font-size: 16px;
			font-weight: normal;
			position: absolute;
			pointer-events: none;
			left: 5px;
			top: 10px;
			transition: 300ms ease all;

			&.shrink {
				@include shrinkLabel();
			}
		}
	}
</style>
