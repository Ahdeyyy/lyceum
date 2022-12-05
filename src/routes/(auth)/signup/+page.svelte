<script>
	import { FormInput, FormAlert } from '$lib/components/';

	export let form;
</script>

<svelte:head>
	<title>Sign Up</title>
</svelte:head>

<main class="flex justify-center my-12">
	<form class="card w-96 bg-base-100 shadow-xl" action="?/register" method="post">
		<div class="card-body">
			<h2 class="card-title justify-center">Create your account</h2>

			<FormInput
				name="name"
				label="Name"
				type="text"
				id="name"
				placeholder="Gustavo Fring"
				required
			/>
			<FormInput
				name="email"
				label="Email"
				type="email"
				id="email"
				placeholder="example@mail.com"
				required
			/>
			<FormInput
				name="password"
				label="Password"
				type="password"
				id="password"
				placeholder="Password"
				required
			/>

			<FormInput
				name="passwordConfirm"
				label="Confirm Password"
				type="password"
				id="passwordConfirm"
				placeholder="Confirm Password"
				required
			/>

			<p>
				Already have an account? <a href="/login" class="link link-hover text-primary ">login</a>
			</p>

			{#if form?.error}
				<FormAlert type="error" message={form.message} />
			{/if}

			<div class="card-actions my-1">
				<button class="btn btn-primary w-full" type="submit">Sign up</button>
			</div>
		</div>
	</form>
</main>
