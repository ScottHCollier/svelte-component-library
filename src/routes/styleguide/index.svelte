<script>
	import Breadcrumb from '../../components/Blocks/Breadcrumb.svelte';
	import Container from '../../components/Atoms/Container.svelte';
	import Button from '../../components/Atoms/Button.svelte';
	import Accordion from '../../components/Content/Accordion.svelte';
	import Tabs from '../../components/Content/Tabs.svelte';
</script>

<Container backgroundColour="tertiary">
	<Breadcrumb />
</Container>

<!-- <div class="styleguide-section">
	<div class="col-sm-12">
		<h2 class="styleguide-heading">Colour Palette</h2>
	</div>
	<div class="col-sm-4">
		<div class="colours">
			<div class="primary" />
			<div class="secondary" />
			<div class="tertiary" />
		</div>
	</div>
	<div class="col-sm-4">
		<div class="colours">
			<div class="blue" />
			<div class="green" />
			<div class="pink" />
		</div>
	</div>
	<div class="col-sm-4">
		<div class="colours">
			<div class="black" />
			<div class="grey" />
			<div class="white" />
		</div>
	</div>
</div> -->

<Container>
	<div class="content">
		<div class="styleguide-section">
			<h2 class="styleguide-heading">Headers</h2>

			<h1>h1 Heading</h1>
			<h2>h2 Heading</h2>
			<h3>h3 Heading</h3>
			<h4>h4 Heading</h4>
			<h5>h5 Heading</h5>
			<h6>h6 Heading</h6>
		</div>

		<div class="styleguide-section">
			<h2 class="styleguide-heading">Section headers</h2>

			<h1 class="section-heading">h1 Section heading</h1>
			<h2 class="section-heading">h2 Section heading</h2>
			<h3 class="section-heading">h3 Section heading</h3>
			<h4 class="section-heading">h4 Section heading</h4>
		</div>

		<div class="styleguide-section">
			<h2 class="styleguide-heading">Paragraphs</h2>

			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab voluptas non consectetur labore
				accusamus enim natus vitae? Deserunt iure saepe dicta nesciunt suscipit enim, omnis facere
				corrupti a, quos animi!
			</p>

			<p>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo laboriosam molestiae
				aspernatur et neque delectus quasi ipsam id, sequi, officiis repellendus tempora quaerat
				itaque ex esse sint at sit reprehenderit.
			</p>
		</div>

		<div class="styleguide-section">
			<h2 class="styleguide-heading">Free text</h2>

			Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, dolore, voluptatibus cum
			quas ullam quibusdam hic possimus optio saepe asperiores blanditiis quod id? Minus, rem
			numquam consequatur incidunt laborum ea.
		</div>

		<div class="styleguide-section">
			<h2 class="styleguide-heading">Links</h2>

			<a href="/styleguide">This is an example of a link</a>
		</div>

		<div class="styleguide-section">
			<h2 class="styleguide-heading">Lists</h2>

			<div class="list-section">
				<div class="list-example">
					<ul>
						<li>Un-ordered list item</li>
						<li>Un-ordered list item</li>
						<li>Un-ordered list item</li>
						<li>Un-ordered list item</li>
					</ul>

					<ol>
						<li>Ordered list item</li>
						<li>Ordered list item</li>
						<li>Ordered list item</li>
						<li>Ordered list item</li>
					</ol>
				</div>

				<div class="list-example">
					<ul>
						<li><a href="/styleguide">Un-ordered list item with a link</a></li>
						<li><a href="/styleguide">Un-ordered list item with a link</a></li>
						<li><a href="/styleguide">Un-ordered list item with a link</a></li>
						<li><a href="/styleguide">Un-ordered list item with a link</a></li>
					</ul>

					<ol>
						<li><a href="/styleguide">Ordered list item with a link</a></li>
						<li><a href="/styleguide">Ordered list item with a link</a></li>
						<li><a href="/styleguide">Ordered list item with a link</a></li>
						<li><a href="/styleguide">Ordered list item with a link</a></li>
					</ol>
				</div>
			</div>
		</div>

		<div class="styleguide-section">
			<h2 class="styleguide-heading">Boxes</h2>

			<div class="box-section">
				<div class="default-box">
					<div class="box-heading">Default Box</div>
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio debitis maiores sit
						recusandae aspernatur consequatur laborum reprehenderit natus. Pariatur similique
						voluptate id natus qui optio fugiat mollitia? Ad, exercitationem veritatis.
					</p>
				</div>

				<div class="default-box secondary-box">
					<div class="box-heading">Secondary Box</div>
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio debitis maiores sit
						recusandae aspernatur consequatur laborum reprehenderit natus. Pariatur similique
						voluptate id natus qui optio fugiat mollitia? Ad, exercitationem veritatis.
					</p>
				</div>
			</div>
		</div>

		<div class="styleguide-section">
			<h2 class="styleguide-heading">Buttons</h2>

			<div class="button-section">
				<Button text="Primary button" buttonColour="primary" />
				<Button text="Tertiary button" buttonColour="tertiary" />
				<Button text="Accent button" buttonColour="accent" />
			</div>

			<div class="button-section secondary">
				<Button text="Secondary button" buttonColour="secondary" />
				<Button text="Tertiary button" buttonColour="tertiary" />
				<Button text="Accent button" buttonColour="accent" />
			</div>
		</div>

		<!-- <div class="styleguide-section">
			<h2 class="styleguide-heading">Alerts</h2>

			<p class="alert-success">This is a <a href="/styleguide">success</a> alert</p>
			<p class="alert-info">This is a <a href="/styleguide">info</a> alert</p>
			<p class="alert-warning">This is a <a href="/styleguide">warning</a> alert</p>
			<p class="alert-error">This is a <a href="/styleguide">error</a> alert</p>
		</div> -->

		<!-- <div class="styleguide-section">
			<h2 class="styleguide-heading">Forms</h2>

			<p class="required-text">* Required fields are marked with an asterisk</p>

			<p class="error">This is an error message</p>

			<p class="frmTxtBox">
				<label for="textbox"
					><span class="vflabel">Text box</span><span class="vfrequired">&nbsp;*</span></label
				>
				<input type="text" name="textbox" id="textbox" value="" maxlength="50" />
			</p>

			<p class="frmDropBox">
				<label for="selectbox"
					><span class="vflabel">Select box</span><span class="vfrequired">&nbsp;*</span></label
				>
				<select name="selectbox" id="selectbox">
					<option value="" selected={true}>Please select a title</option>
					<option value="Mr">Mr</option>
					<option value="Mrs">Mrs</option>
					<option value="Miss">Miss</option>
					<option value="Dr">Dr</option>
					<option value="Other">Other</option>
				</select>
			</p>

			<p class="frmTxtBox">
				<label for="textarea"
					><span class="vflabel">Text area</span><span class="vfrequired">&nbsp;*</span></label
				>
				<input type="textarea" id="textarea" rows={4} cols={50} />
			</p>

			<p class="frmCheckBox">
				<label for="checkbox">Example of a long checkbox</label>
				<input type="checkbox" name="checkbox" id="checkbox" value="checkbox" />
			</p>

			<p class="frmCheckBox">
				<label for="radio">Example of a long radio</label>
				<input type="radio" name="radio" id="radio" value="radio" />
			</p>

			<div class="frmFieldSet">
				<label for="">Example of a radio group</label>
				<ul>
					<li>
						<input type="radio" value="radiogroup1" name="radiogroup" id="radiogroup1" />
						<label for="radiogroup1">Value 1</label>
					</li>
					<li>
						<input type="radio" value="radiogroup2" name="radiogroup" id="radiogroup2" />
						<label for="radiogroup2">Value 2</label>
					</li>
					<li>
						<input type="radio" value="radiogroup3" name="radiogroup" id="radiogroup3" />
						<label for="radiogroup3">Value 3</label>
					</li>
				</ul>
			</div>

			<div class="frmFieldSet">
				<label for="">Example of a checkbox group</label>
				<ul>
					<li>
						<input
							type="checkbox"
							value="checkboxgroup1"
							name="checkboxgroup"
							id="checkboxgroup1"
						/>
						<label for="checkboxgroup1">Value 1</label>
					</li>
					<li>
						<input
							type="checkbox"
							value="checkboxgroup2"
							name="checkboxgroup"
							id="checkboxgroup2"
						/>
						<label for="checkboxgroup2">Value 2</label>
					</li>
					<li>
						<input
							type="checkbox"
							value="checkboxgroup3"
							name="checkboxgroup"
							id="checkboxgroup3"
						/>
						<label for="checkboxgroup3">Value 3</label>
					</li>
				</ul>
			</div>
		</div> -->

		<!-- <div class="styleguide-section">
			<h1 class="styleguide-heading"><span>Product Display Box</span></h1>

			<div class="product-display-box matchHeight">
				<div class="product-special">Special Offer</div>

				<div class="product-image">
					<a href="/styleguide">
						<img
							class="scaleAll"
							src="/Images/noResize/default/temp-square.svg"
							alt="Product Image"
						/></a
					>
				</div>

				<div class="product-name"><a href="/styleguide">Lorem ipsum dolor sit</a></div>

				<div class="product-description">
					Aenean eu felis nec nibh ultricies facilisis. Donec gravida lacinia est, et vehicula enim
					iaculis a. Et vehicula enim iaculis a.
				</div>

				<div class="product-prices">
					<div class="price">Price £19.99</div>
					<div class="was-price"><span class="line-through">Was £25.00 + VAT</span></div>
					<div class="rrp-price">RRP £33.99 + VAT</div>
				</div>

				<div class="product-rating">
					<div class="ratingbar rating3" />
				</div>
			</div>
		</div> -->

		<!-- <div class="styleguide-section">
			<h1 class="styleguide-heading"><span>Product Line Box</span></h1>

			<div class="basket-items">
				<div class="table-div table-div-fixed">
					<div class="table-div-row heading">
						<div class="table-div-cell cell-60">Item</div>
						<div class="table-div-cell cell-20 cell-center">Quantity</div>
						<div class="table-div-cell cell-20 cell-center">
							Line Total<span class="small"> excl VAT</span>
						</div>
					</div>
				</div>

				<div class="table-div table-div-fixed table-divided">
					<div class="table-div-row product-line">
						<div class="table-div-cell cell-60">
							<div class="product-image">
								<a href="/" title="Product Image">
									<img
										src="/Images/noResize/default/temp-square.svg"
										alt="Product Image"
										class="scaleAll"
									/></a
								>
							</div>

							<div class="product-information">
								<div class="product-name"><a href="/" title="Product name">Product name</a></div>
								<div class="product-code">Product code</div>
								<div class="product-description">
									This is the product description. This is the product description. This is the
									product description. This is the product description.
								</div>
							</div>
						</div>

						<div class="table-div-cell cell-20 cell-center">
							<span class="cell-heading">Quantity</span>

							<div class="cell-contents">2</div>
						</div>

						<div class="table-div-cell cell-20 cell-center">
							<span class="cell-heading">Line Total<span class="small"> excl VAT</span></span>

							<div class="cell-contents">
								<div class="product-prices">
									<div class="original-price">£27.99</div>
									<div class="price">£27.99</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div> -->

		<!-- <div class="styleguide-section">
			<h1 class="styleguide-heading"><span>Popup Box</span></h1>

			<a href="/styleguide" class="styleguide_popup_open">Click here to open an example popup.</a>

			<div id="styleguide_popup" class="popup">
				<a href="/styleguide" class="styleguide_popup_close sprite close" title="close" />

				<h2 class="popup-header">Styleguide Example Popup</h2>

				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc posuere mauris quis congue
					vehicula. Ut luctus commodo luctus. Duis gravida tortor nisi, eget varius velit varius
					quis. Aliquam bibendum euismod libero vel luctus. Nunc condimentum, augue nec auctor
					porttitor, eros lectus molestie lorem, a blandit nisl libero eget nisi. Aenean auctor
					tincidunt magna nec congue. Vestibulum vestibulum turpis et felis varius aliquam. In
					luctus a leo eu accumsan.
				</p>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc posuere mauris quis congue
					vehicula. Ut luctus commodo luctus. Duis gravida tortor nisi, eget varius velit varius
					quis. Aliquam bibendum euismod libero vel luctus. Nunc condimentum, augue nec auctor
					porttitor, eros lectus molestie lorem, a blandit nisl libero eget nisi. Aenean auctor
					tincidunt magna nec congue. Vestibulum vestibulum turpis et felis varius aliquam. In
					luctus a leo eu accumsan.
				</p>

				<div class="default-box secondary-box">
					<p class="no-padding">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc posuere mauris quis congue
						vehicula. Ut luctus commodo luctus. Duis gravida tortor nisi, eget varius velit varius
						quis. Aliquam bibendum euismod libero vel luctus. Nunc condimentum, augue nec auctor
						porttitor, eros lectus molestie lorem, a blandit nisl libero eget nisi. Aenean auctor
						tincidunt magna nec congue. Vestibulum vestibulum turpis et felis varius aliquam. In
						luctus a leo eu accumsan.
					</p>
				</div>
			</div>
		</div> -->

		<!-- <div class="styleguide-section">
			<h1 class="styleguide-heading"><span>Table</span></h1>

			<div class="table-div table-div-fixed">
				<div class="table-div-row heading">
					<div class="table-div-cell cell-20">Column 1</div>
					<div class="table-div-cell cell-20">Column 2 <span class="small">alt title</span></div>
					<div class="table-div-cell cell-20">Column 3</div>
					<div class="table-div-cell cell-20">Column 4</div>
					<div class="table-div-cell cell-20">Column 5</div>
				</div>
			</div>

			<div class="table-div table-div-fixed">
				<div class="table-div-row">
					<div class="table-div-cell cell-20">
						<span class="cell-heading">Column 1</span>
						<div class="cell-contents">Column 1 Content</div>
					</div>
					<div class="table-div-cell cell-20">
						<span class="cell-heading">Column 2</span>
						<div class="cell-contents">Column 2 Content</div>
					</div>
					<div class="table-div-cell cell-20">
						<span class="cell-heading">Column 3</span>
						<div class="cell-contents">Column 3 Content</div>
					</div>
					<div class="table-div-cell cell-20">
						<span class="cell-heading">Column 4</span>
						<div class="cell-contents">Column 4 Content</div>
					</div>
					<div class="table-div-cell cell-20">
						<span class="cell-heading">Column 5</span>
						<div class="cell-contents">Column 5 Content</div>
					</div>
				</div>

				<div class="table-div-row">
					<div class="table-div-cell cell-20">
						<span class="cell-heading">Column 1</span>
						<div class="cell-contents">Column 1 Content</div>
					</div>
					<div class="table-div-cell cell-20">
						<span class="cell-heading">Column 2</span>
						<div class="cell-contents">Column 2 Content</div>
					</div>
					<div class="table-div-cell cell-20">
						<span class="cell-heading">Column 3</span>
						<div class="cell-contents">Column 3 Content</div>
					</div>
					<div class="table-div-cell cell-20">
						<span class="cell-heading">Column 4</span>
						<div class="cell-contents">Column 4 Content</div>
					</div>
					<div class="table-div-cell cell-20">
						<span class="cell-heading">Column 5</span>
						<div class="cell-contents">Column 5 Content</div>
					</div>
				</div>
			</div>

			<br />

			<div class="table-div table-div-fixed">
				<div class="table-div-row heading alternative">
					<div class="table-div-cell cell-20">Column 1</div>
					<div class="table-div-cell cell-20">Column 2 <span class="small">alt title</span></div>
					<div class="table-div-cell cell-20">Column 3</div>
					<div class="table-div-cell cell-20">Column 4</div>
					<div class="table-div-cell cell-20">Column 5</div>
				</div>
			</div>

			<div class="table-div table-div-fixed">
				<div class="table-div-row">
					<div class="table-div-cell cell-20">
						<span class="cell-heading">Column 1</span>
						<div class="cell-contents">Column 1 Content</div>
					</div>
					<div class="table-div-cell cell-20">
						<span class="cell-heading">Column 2</span>
						<div class="cell-contents">Column 2 Content</div>
					</div>
					<div class="table-div-cell cell-20">
						<span class="cell-heading">Column 3</span>
						<div class="cell-contents">Column 3 Content</div>
					</div>
					<div class="table-div-cell cell-20">
						<span class="cell-heading">Column 4</span>
						<div class="cell-contents">Column 4 Content</div>
					</div>
					<div class="table-div-cell cell-20">
						<span class="cell-heading">Column 5</span>
						<div class="cell-contents">Column 5 Content</div>
					</div>
				</div>
			</div>
		</div> -->

		<div class="styleguide-section">
			<h1 class="styleguide-heading"><span>Tabs</span></h1>

			<div class="tabs-wrapper">
				<Tabs />
			</div>
			<div class="tabs-wrapper secondary">
				<Tabs secondary />
			</div>
		</div>

		<div class="styleguide-section">
			<h1 class="styleguide-heading"><span>Accordion</span></h1>

			<div class="accordion-section">
				<div class="accordion-wrapper">
					<Accordion />
				</div>
				<div class="accordion-wrapper secondary">
					<Accordion secondary />
				</div>
			</div>
		</div>
	</div>
</Container>

<!-- end content container -->
<style lang="scss">
	.styleguide-section {
		margin-bottom: 30px;

		.styleguide-heading {
			margin-bottom: 10px;
			font-style: italic;
		}

		a {
			&:hover,
			&:focus,
			&:active {
				color: $dark-grey;
				text-decoration: underline;
			}
		}

		.list-section {
			@include flex-box;
			justify-content: start;

			.list-example {
				ul {
					margin-bottom: 20px;
				}

				&:first-of-type {
					margin-right: 50px;
				}
			}
		}

		.box-section {
			@include flex-box;
			justify-content: space-between;

			.default-box {
				border: 2px solid $black;
				width: 48%;

				.box-heading {
					background-color: $secondary;
					color: $secondary-text;
					border-bottom: 2px solid $black;
					padding: 5px;
				}

				p {
					padding: 10px;
				}

				&.secondary-box {
					.box-heading {
						background-color: $tertiary;
						color: $primary-text;
					}
				}
			}
		}

		.button-section {
			@include flex-box;
			justify-content: space-evenly;
			border: 2px solid $secondary;

			&.secondary {
				background-color: $secondary;
			}
		}

		.tabs-wrapper {
			padding: 20px;
			border: 2px solid $secondary;

			&.secondary {
				background-color: $secondary;
			}
		}

		.accordion-section {
			@include flex-box;
			justify-content: space-between;
			border: 2px solid $secondary;

			.accordion-wrapper {
				width: 50%;
				padding: 10px;

				&.secondary {
					background-color: $secondary;
				}
			}
		}
	}
</style>
