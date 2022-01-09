<script>
	import Button from '../../components/Atoms/Button.svelte';
	import { initAuth } from '$lib/firebase';
	import Sidebar from '../../components/User/Sidebar.svelte';
	import Container from '../../components/Atoms/Container.svelte';

	import MyAccount_Home from '../../components/User/MyAccount_Home.svelte';
	import MyAccount_Personal from '../../components/User/MyAccount_Personal.svelte';
	import MyAccount_Data from '../../components/User/MyAccount_Data.svelte';
	import MyAccount_Security from '../../components/User/MyAccount_Security.svelte';
	import MyAccount_Payments from '../../components/User/MyAccount_Payments.svelte';

	let pages = [
		{ component: MyAccount_Home },
		{ component: MyAccount_Personal },
		{ component: MyAccount_Data },
		{ component: MyAccount_Security },
		{ component: MyAccount_Payments }
	];
	let { user, logout } = initAuth();
	let currentPage = pages[0];

	// change this to load component dynamically using svelte:component
</script>

<Container fullWidth>
	{#if $user}
		<Sidebar bind:currentPage bind:pages />
		<div class="my-account-container">
			<svelte:component this={currentPage.component} />

			<!-- {#if currentPage === 'Home'}
				<h1>Home Page</h1>
			{:else if currentPage === 'Personal info'}
				<h1>Personal info</h1>
			{:else if currentPage === 'Data and privacy'}
				<h1>Data and privacy</h1>
			{:else if currentPage === 'Security'}
				<h1>Security</h1>
			{:else if currentPage === 'Payments and subscriptions'}
				<h1>Payments and subscriptions</h1>
			{/if} -->
		</div>

		<div class="logout">
			<h2>{$user.email}</h2>
			<Button type="button" onClick={logout} text="Log out" />
		</div>
	{:else}
		<h2><a href="/signin">Sign in</a> to view account</h2>
	{/if}
</Container>

<style lang="scss">
	.my-account-container {
		@include flex-box;
	}

	.logout {
		@include flex-box;
		flex-direction: column;
		padding: 50px;

		h2 {
			margin-bottom: 40px;
		}
	}
</style>
