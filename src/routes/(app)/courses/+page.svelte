<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<div class="grid md:grid-cols-3 auto-cols-max auto-rows-max ">
	{#each data.courses.items as item}
		<a
			href="/courses/{item.slug}"
			class="text-xl mx-2 py-10 px-3 shadow-lg rounded-md hover:scale-105"
		>
			{item.name} :
			{item.code}
		</a>
	{/each}
</div>
