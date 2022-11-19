<script>
	import { FormAlert, FormInput } from '$lib/components/';

	export let form;
</script>

<main class="flex justify-center">
	<form class="card w-96 bg-base-100 shadow-xl" action="?/login" method="post">
		<div class="card-body">
			<h2 class="card-title">Login</h2>

			<FormInput
				type="email"
				name="email"
				id="email"
				label="Email"
				placeholder="example@mail.com"
				required
			/>

			<FormInput
				type="password"
				name="password"
				id="password"
				label="Password"
				placeholder="Password"
				required
			/>

			{#if form?.error}
				<FormAlert type="error" message="Invalid credentials" />
			{/if}

			<div class="card- my-1">
				<button class="btn btn-primary w-full" type="submit">Login</button>
			</div>

			<p>
				Don't have an account? <a href="/signup" class="link link-hover text-primary">sign up</a>
			</p>
		</div>
	</form>
</main>
