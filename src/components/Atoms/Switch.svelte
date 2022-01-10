<script>
	export let checked = false;
	export let fixed = false;
</script>

{#if fixed}
	<div class="switch">
		<div type="checkbox" />
		<span class="fixed" />
	</div>
{:else}
	<label class="switch">
		<input type="checkbox" bind:checked />
		<span class="slider" />
	</label>
{/if}

<style lang="scss">
	.switch {
		position: relative;
		display: inline-block;
		width: 44px;
		height: 18px;
		margin: 3px 0;
	}

	.switch input {
		opacity: 0;
		width: 0;
		height: 0;
	}

	.slider,
	.fixed {
		position: absolute;
		cursor: pointer;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: rgb(78, 78, 78);
		-webkit-transition: 0.4s;
		transition: 0.4s;
		border-radius: 34px;
	}

	.slider:before,
	.fixed:before {
		position: absolute;
		content: '';
		height: 14px;
		width: 14px;
		left: 2px;
		bottom: 2px;
		background-color: white;
		-webkit-transition: 0.4s;
		transition: 0.4s;
		border-radius: 50%;
	}

	.fixed {
		background-color: #29ce3f;
		box-shadow: 0 0 1px #29ce3f;
	}

	.fixed:before {
		-webkit-transform: translateX(26px);
		-ms-transform: translateX(26px);
		transform: translateX(26px);
	}

	input:checked + .slider {
		background-color: #29ce3f;
		box-shadow: 0 0 1px #29ce3f;
	}

	input:checked + .slider:before {
		-webkit-transform: translateX(26px);
		-ms-transform: translateX(26px);
		transform: translateX(26px);
	}
</style>
