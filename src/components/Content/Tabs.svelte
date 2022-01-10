<script>
	import TwoColumnTest from '../Content/TwoColumnTest.svelte';
	export let currentTab = 0;
	export let colour;
</script>

<ul class="tabs {colour}">
	<li class={colour}>
		<span
			class="{colour} {currentTab === 0 ? 'active' : ''}"
			on:click={() => {
				currentTab = 0;
			}}>Book nerd</span
		>
		<div class="{colour} {currentTab === 0 ? 'active' : ''}">
			<TwoColumnTest
				reverse
				textTitle="Nonsense from Jeff Goldblum"
				textCopy="Yeah, but John, if The Pirates of the Caribbean breaks down, the pirates don’t eat the tourists. Yes, Yes, without the oops! You really think you can fly that thing?"
				imageSrc="assets/products/macbook.png"
				imageAlt="laptop small"
			/>
		</div>
	</li>
	<li class={colour}>
		<span
			class="{colour} {currentTab === 1 ? 'active' : ''}"
			on:click={() => {
				currentTab = 1;
			}}
		>
			Big Mac
		</span>
		<div class=" {colour} {currentTab === 1 ? 'active' : ''}">
			<TwoColumnTest
				textTitle="Nonsense from Jeff Goldblum"
				textCopy="Yeah, but John, if The Pirates of the Caribbean breaks down, the pirates don’t eat the tourists. Yes, Yes, without the oops! You really think you can fly that thing?"
				imageSrc="assets/products/mac.png"
				imageAlt="laptop small"
			/>
		</div>
	</li>
	<li class={colour}>
		<span
			class="{colour} {currentTab === 2 ? 'active' : ''}"
			on:click={() => {
				currentTab = 2;
			}}
		>
			Multi Platform
		</span>
		<div class="{colour} {currentTab === 2 ? 'active' : ''}">
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
			color: $primary-dark;
		}

		&.secondary {
			color: $secondary-dark;
		}

		&.tertiary {
			color: $tertiary-dark;
		}

		&.fourth {
			color: $fourth-dark;
		}

		li {
			width: calc(100% / 3);
			border-bottom: 0;

			&.primary {
				border: 2px solid $primary-dark;
			}

			&.secondary {
				border: 2px solid $secondary-dark;
			}

			&.tertiary {
				border: 2px solid $tertiary-dark;
			}

			&.fourth {
				border: 2px solid $fourth-dark;
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
					background-color: $primary-light;
					color: $primary-dark;

					&.active {
						background-color: $primary-dark;
					}
				}

				&.secondary {
					background-color: $secondary-light;
					color: $secondary-dark;

					&.active {
						background-color: $secondary-dark;
					}
				}

				&.tertiary {
					background-color: $tertiary-light;
					color: $tertiary-dark;

					&.active {
						background-color: $tertiary-dark;
					}
				}

				&.fourth {
					background-color: $fourth-light;
					color: $fourth-dark;

					&.active {
						background-color: $fourth-dark;
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
					border: 2px solid $primary-dark;
				}

				&.secondary {
					border: 2px solid $secondary-dark;
				}

				&.tertiary {
					border: 2px solid $tertiary-dark;
				}

				&.fourth {
					border: 2px solid $fourth-dark;
				}

				&.active {
					@include flex-box;
				}
			}
		}
	}
</style>
