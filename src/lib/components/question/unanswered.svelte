<script>
	import Option from './option.svelte';

	export let qn;
</script>

<div class="bg-base-100 mx-2 my-3 px-10 py-10 rounded-lg shadow-md relative">
	<p class="mx-2 py-2 font-semibold">
		{qn.number}. &nbsp;
		{@html qn.body}
	</p>
	{#each qn.options as option}
		<Option
			{option}
			{qn}
			on:select={(e) => {
				qn.selected = e.detail;
			}}
		/>
	{/each}

	<button
		class="btn btn-ghost my-1"
		on:click={() => {
			qn.selected = null;
		}}
		disabled={!qn.selected}
	>
		Clear my option
	</button>
</div>
