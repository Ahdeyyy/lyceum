<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<main class="flex flex-col m-8">
	<h1 class="text-4xl font-bold text-center uppercase my-4">Courses</h1>
	{#each data.courses.items as item}
		<a
			href="/courses/{item.slug}"
			class="text-xl m-2 uppercase py-10 shadow-lg text-center bg-base-100 rounded-md hover:scale-105 hover:shadow-2xl transition duration-500 ease-in-out"
		>
			{item.name} |
			{item.code}
		</a>
	{/each}
</main>
