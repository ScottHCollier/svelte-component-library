<script>
	import AccountCircle from 'svelte-material-icons/AccountCircle.svelte';
	import Contacts from 'svelte-material-icons/Contacts.svelte';
	import ChartDonut from 'svelte-material-icons/ChartDonut.svelte';
	import Security from 'svelte-material-icons/Security.svelte';
	import ContactlessPaymentCircle from 'svelte-material-icons/ContactlessPayment.svelte';

	export let currentPage;
	export let pages;
</script>

<ul class="my-account-links">
	<li class={currentPage === pages[0] ? 'current-page' : ''}>
		<AccountCircle color={currentPage === pages[0] ? 'blue' : 'black'} height="2em" width="2em" />
		<div
			on:click={() => {
				currentPage = pages[0];
			}}
		>
			Home
		</div>
	</li>
	<li class={currentPage === pages[1] ? 'current-page' : ''}>
		<Contacts color={currentPage === pages[1] ? 'blue' : 'black'} height="2em" width="2em" />
		<div
			on:click={() => {
				currentPage = pages[1];
			}}
		>
			Personal info
		</div>
	</li>
	<li class={currentPage === pages[2] ? 'current-page' : ''}>
		<ChartDonut color={currentPage === pages[2] ? 'blue' : 'black'} height="2em" width="2em" />
		<div
			on:click={() => {
				currentPage = pages[2];
			}}
		>
			Data and privacy
		</div>
	</li>
	<li class={currentPage === pages[3] ? 'current-page' : ''}>
		<Security color={currentPage === pages[3] ? 'blue' : 'black'} height="2em" width="2em" />
		<div
			on:click={() => {
				currentPage = pages[3];
			}}
		>
			Security
		</div>
	</li>
	<li class={currentPage === pages[4] ? 'current-page' : ''}>
		<ContactlessPaymentCircle
			color={currentPage === pages[4] ? 'blue' : 'black'}
			height="2em"
			width="2em"
		/>
		<div
			on:click={() => {
				currentPage = pages[4];
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
