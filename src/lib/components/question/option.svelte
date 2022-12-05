<script>
	import { createEventDispatcher } from 'svelte';

	export let option;
	export let qn;

	const dispatch = createEventDispatcher();
</script>

<div
	class="form-control my-3 p-1 bg-base-300 rounded shadow-lg hover:scale-105 hover:shadow-xl transition ease-in-out duration-500"
>
	<label class="label cursor-pointer mx-2">
		<span class="label-text">{option.body}</span>
		<input
			value={option.char}
			type="radio"
			name={qn.id}
			class="radio checked:bg-primary"
			on:click={(e) => dispatch('select', e.target.value)}
			checked={qn.selected === option.char}
		/>
	</label>
</div>
