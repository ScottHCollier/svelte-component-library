<script>
	import Button from '../../components/Atoms/Button.svelte';
	import { initAuth } from '$lib/firebaseAuth';
	import Container from '../../components/Atoms/Container.svelte';
	import { goto } from '$app/navigation';

	let { user, logout } = initAuth();
</script>

<Container>
	{#if $user}
		<div class="logout">
			<h2>{$user.email}</h2>
			<Button type="button" onClick={logout} text="Log out" />
		</div>
	{:else}
		TEST
	{/if}
</Container>

<style lang="scss">
	.logout {
		@include flex-box;
		flex-direction: column;
		padding: 50px;

		h2 {
			margin-bottom: 40px;
		}
	}
</style>
