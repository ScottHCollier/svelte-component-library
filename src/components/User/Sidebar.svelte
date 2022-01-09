<script>
	import AccountCircle from 'svelte-material-icons/AccountCircle.svelte';
	import Contacts from 'svelte-material-icons/Contacts.svelte';
	import ChartDonut from 'svelte-material-icons/ChartDonut.svelte';
	import Security from 'svelte-material-icons/Security.svelte';
	import ContactlessPaymentCircle from 'svelte-material-icons/ContactlessPayment.svelte';

	export let currentPage;
</script>

<ul class="my-account-links">
	<li class={currentPage === 'Home' ? 'current-page' : ''}>
		<AccountCircle color={currentPage === 'Home' ? 'blue' : 'black'} height="2em" width="2em" />
		<div
			on:click={() => {
				currentPage = 'Home';
			}}
		>
			Home
		</div>
	</li>
	<li class={currentPage === 'Personal info' ? 'current-page' : ''}>
		<Contacts color={currentPage === 'Personal info' ? 'blue' : 'black'} height="2em" width="2em" />
		<div
			on:click={() => {
				currentPage = 'Personal info';
			}}
		>
			Personal info
		</div>
	</li>
	<li class={currentPage === 'Data and privacy' ? 'current-page' : ''}>
		<ChartDonut
			color={currentPage === 'Data and privacy' ? 'blue' : 'black'}
			height="2em"
			width="2em"
		/>
		<div
			on:click={() => {
				currentPage = 'Data and privacy';
			}}
		>
			Data and privacy
		</div>
	</li>
	<li class={currentPage === 'Security' ? 'current-page' : ''}>
		<Security color={currentPage === 'Security' ? 'blue' : 'black'} height="2em" width="2em" />
		<div
			on:click={() => {
				currentPage = 'Security';
			}}
		>
			Security
		</div>
	</li>
	<li class={currentPage === 'Payments and subscriptions' ? 'current-page' : ''}>
		<ContactlessPaymentCircle
			color={currentPage === 'Payments and subscriptions' ? 'blue' : 'black'}
			height="2em"
			width="2em"
		/>
		<div
			on:click={() => {
				currentPage = 'Payments and subscriptions';
			}}
		>
			Payments and subscriptions
		</div>
	</li>
</ul>

<style lang="scss">
	.my-account-links {
		position: fixed;
		padding: $header-full-width-padding;

		li {
			@include flex-box;
			justify-content: flex-start;
			padding: 10px;
			padding-left: 0;

			&.current-page {
				background: #1967d233;
				border-top-right-radius: 15px;
				border-bottom-right-radius: 15px;

				div {
					color: blue;
				}
			}

			div {
				margin-left: 10px;

				&:hover {
					cursor: pointer;
				}
			}
		}
	}
</style>
