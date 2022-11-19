<script>
	import Question from '$lib/components/question/unanswered.svelte';
	import AnsQuestion from '$lib/components/question/answered.svelte';
	export let questions;
	export let submitted;
</script>

<div class="shadow-lg">
	{#each questions as qn}
		{#if submitted}
			<AnsQuestion {qn} />
		{:else}
			<Question {qn} />
		{/if}
		<div class="divider" />
	{/each}
</div>
