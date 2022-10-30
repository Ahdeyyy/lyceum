<script>
	import '$lib/global.css';
	export let data;
</script>

<nav class="navbar bg-base-100 shadow-md ">
	<div class="navbar-start">
		<a href="/" class="w-1/5 btn btn-ghost normal-case text-xl">Home</a>
		{#if data?.profile}
			<p class="text-xl px-2">Welcome, {data.profile.name}</p>
		{/if}
	</div>

	{#if data?.profile}
	<div class="navbar-end" >
		<form action="/logout" method="post">
			<button class="btn btn-primary" type="submit">logout</button>
		</form>
	</div>
	{:else}
		<div class="navbar-end">
			<a href="/signup" class="btn btn-primary ">signup</a>
		</div>
	{/if}
</nav>

<section class="flex justify-center my-3" >
	<slot />
</section>
