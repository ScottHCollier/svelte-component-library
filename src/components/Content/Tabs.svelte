<script>
	import TwoColumnTest from '../Content/TwoColumnTest.svelte';
	export let currentTab = 0;
	export let secondary = false;
</script>

<ul class="tabs {secondary ? 'secondary' : 'primary'}">
	<li class={secondary ? 'secondary' : 'primary'}>
		<span
			class="{secondary ? 'secondary' : 'primary'} {currentTab === 0 ? 'active' : ''}"
			on:click={() => {
				currentTab = 0;
			}}>Book nerd</span
		>
		<div class="{secondary ? 'secondary' : 'primary'} {currentTab === 0 ? 'active' : ''}">
			<TwoColumnTest
				reverse
				textTitle="Nonsense from Jeff Goldblum"
				textCopy="Yeah, but John, if The Pirates of the Caribbean breaks down, the pirates don’t eat the tourists. Yes, Yes, without the oops! You really think you can fly that thing?"
				imageSrc="assets/products/macbook.png"
				imageAlt="laptop small"
			/>
		</div>
	</li>
	<li class={secondary ? 'secondary' : 'primary'}>
		<span
			class="{secondary ? 'secondary' : 'primary'} {currentTab === 1 ? 'active' : ''}"
			on:click={() => {
				currentTab = 1;
			}}
		>
			Big Mac
		</span>
		<div class=" {secondary ? 'secondary' : 'primary'} {currentTab === 1 ? 'active' : ''}">
			<TwoColumnTest
				textTitle="Nonsense from Jeff Goldblum"
				textCopy="Yeah, but John, if The Pirates of the Caribbean breaks down, the pirates don’t eat the tourists. Yes, Yes, without the oops! You really think you can fly that thing?"
				imageSrc="assets/products/mac.png"
				imageAlt="laptop small"
			/>
		</div>
	</li>
	<li class={secondary ? 'secondary' : 'primary'}>
		<span
			class="{secondary ? 'secondary' : 'primary'} {currentTab === 2 ? 'active' : ''}"
			on:click={() => {
				currentTab = 2;
			}}
		>
			Multi Platform
		</span>
		<div class="{secondary ? 'secondary' : 'primary'} {currentTab === 2 ? 'active' : ''}">
			<TwoColumnTest
				reverse
				textTitle="Jeffsum.com"
				textCopy="Hey, take a look at the earthlings. Goodbye! Just my luck, no ice. Checkmate... You know what? It is beets. I've crashed into a beet truck. Eventually, you do plan to have dinosaurs on your dinosaur tour, right?"
				imageSrc="assets/responsive-design/responsive-design-small.png"
				imageAlt="laptop small"
			/>
		</div>
	</li>
</ul>

<style lang="scss">
	.tabs {
		@include flex-box;
		align-items: flex-start;
		position: relative;
		height: 500px;

		&.primary {
			color: $secondary;
		}

		&.secondary {
			color: $primary;
		}

		&.tertiary {
			color: $tertiary;
		}

		&.accent {
			color: $accent;
		}

		li {
			width: calc(100% / 3);
			border-bottom: 0;

			&.primary {
				border: 2px solid $secondary;
			}

			&.secondary {
				border: 2px solid $primary;
			}

			&.tertiary {
				border: 2px solid $tertiary;
			}

			&.accent {
				border: 2px solid $accent;
			}

			&:nth-of-type(2) {
				border-left: 0;
				border-right: 0;
			}

			span {
				@include flex-box;
				height: 40px;
				text-align: center;

				&.primary {
					background-color: $primary;
					color: $secondary;

					&.active {
						background-color: $secondary;
					}
				}

				&.secondary {
					background-color: $secondary;
					color: $primary;

					&.active {
						background-color: $tertiary;
						color: $secondary;
					}
				}

				&.tertiary {
					background-color: $tertiary;
					color: $tertiary;

					&.active {
						background-color: $tertiary;
					}
				}

				&.accent {
					background-color: $accent;
					color: $accent;

					&.active {
						background-color: $accent;
					}
				}

				&.active {
					color: $white;
				}

				&:hover {
					cursor: pointer;
				}
			}

			div {
				position: absolute;
				left: 0;
				display: none;
				width: 100%;
				height: calc(100% - 40px);

				&.primary {
					border: 2px solid $secondary;
					background-color: $primary;
				}

				&.secondary {
					border: 2px solid $primary;
					background-color: $secondary;
				}

				&.tertiary {
					border: 2px solid $tertiary;
				}

				&.accent {
					border: 2px solid $accent;
				}

				&.active {
					@include flex-box;
				}
			}
		}
	}
</style>
