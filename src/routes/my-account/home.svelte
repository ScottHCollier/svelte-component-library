<script>
	import Button from '../../components/Atoms/Button.svelte';
	import { initAuth } from '$lib/firebase';
	import Sidebar from '../../components/User/Sidebar.svelte';
	import Container from '../../components/Atoms/Container.svelte';

	import MyAccountHome from '../../components/User/MyAccountHome.svelte';
	import MyAccountPersonal from '../../components/User/MyAccountPersonal.svelte';
	import MyAccountData from '../../components/User/MyAccountData.svelte';
	import MyAccountSecurity from '../../components/User/MyAccountSecurity.svelte';
	import MyAccountPayments from '../../components/User/MyAccountPayments.svelte';

	let pages = [
		{ component: MyAccountHome },
		{ component: MyAccountPersonal },
		{ component: MyAccountData },
		{ component: MyAccountSecurity },
		{ component: MyAccountPayments }
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
		</div>

		<div class="logout">
			<h2>{$user.email}</h2>
			<Button type="button" onClick={logout} text="Log out" colour="black" />
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
