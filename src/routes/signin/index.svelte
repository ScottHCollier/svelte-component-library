<div class="sign-in-and-sign-up">
	<div class="sign-in">
		<h2 class="title">I already have an account</h2>
		<span>Sign in the your email and password</span>
		<form>
			<input name="email" type="email" label="Email" value="email" required />
			<input name="password" type="password" value="password" label="Password" required />
			<div class="buttons">
				<button type="submit">Sign In</button>
				<button type="button"> Sign in with Google </button>
			</div>
		</form>
	</div>

	<div class="sign-up">
		<h2 class="title">I do not have an account</h2>
		<span>Sign up with your email and password</span>
		<form class="sign-up-form">
			<input type="text" name="displayName" value="displayName" label="Display Name" required />
			<input type="email" name="email" value="email" label="Email" required />
			<input type="password" name="password" value="password" label="Password" required />
			<input
				type="password"
				name="confirmPassword"
				value="password"
				label="Confirm Password"
				required
			/>
			<button type="submit">Sign Up</button>
		</form>
	</div>
</div>

<style lang="scss">
	.sign-in-and-sign-up {
		width: 850px;
		display: flex;
		justify-content: space-between;
		margin: 30px auto;

		.sign-in {
			width: 380px;
			display: flex;
			flex-direction: column;

			.title {
				margin: 10px 0;
			}

			.buttons {
				display: flex;
				justify-content: space-between;
			}
		}

		.sign-up {
			display: flex;
			flex-direction: column;
			width: 380px;

			.title {
				margin: 10px 0;
			}
		}
	}
</style>
