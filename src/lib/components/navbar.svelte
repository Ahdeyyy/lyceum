<script>
	export let data;
	import Toggler from '$lib/components/themeToggler.svelte';
</script>

<div class="drawer">
	<input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content flex flex-col">
		<!-- Navbar -->
		<div class="w-full navbar bg-base-300">
			<div class="flex-none lg:hidden">
				<label for="my-drawer-3" class="btn btn-square btn-ghost">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						class="inline-block w-6 h-6 stroke-current"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16"
						/></svg
					>
				</label>
			</div>

			<div class="flex-1 px-2 mx-2">Lyceum</div>
			<div class="flex-none hidden lg:block">
				<ul class="menu menu-horizontal">
					<li>
						<a href="/" class="rounded mx-1 my-2.5">Home</a>
					</li>

					<li>
						{#if data?.profile?.is_staff}
							<a class="rounded my-2.5 mx-1" href="/dashboard">Dashboard</a>
						{/if}
					</li>

					<li>
						<a class="rounded my-2.5 mx-1" href="/courses">Courses</a>
					</li>

					<li>
						{#if data?.profile}
							<form action="/logout" method="post">
								<button class="btn btn-primary text-primary-content rounded my-2.5  " type="submit">
									logout
								</button>
							</form>
						{:else}
							<a href="/signup" class="btn btn-primary text-primary-content rounded my-2.5"
								>signup</a
							>
						{/if}
					</li>
					
					<li>
						<Toggler />
					</li>
				</ul>
			</div>
		</div>
		<slot />
	</div>
	<div class="drawer-side">
		<label for="my-drawer-3" class="drawer-overlay" />
		<ul class="menu p-4 w-80 bg-base-100">
			<!-- Sidebar content here -->
			<li>
				<a href="/" class="btn btn-ghost rounded my-2">Home</a>
			</li>
			<li>
				{#if data?.profile?.is_staff}
					<a class="btn btn-ghost rounded my-2" href="/dashboard">dashboard</a>
				{/if}
			</li>

			<li>
				<a class="btn btn-ghost rounded my-2" href="/courses">courses</a>
			</li>
			
			<li>
				{#if data?.profile}
					<form action="/logout" method="post">
						<button
							class="btn btn-primary text-primary-content rounded mx-auto w-full"
							type="submit">logout</button
						>
					</form>
				{:else}
					<a href="/signup" class="btn btn-primary text-primary-content rounded">signup</a>
				{/if}
			</li>
			
			<li>
				<Toggler />
			</li>


		</ul>
	</div>
</div>
