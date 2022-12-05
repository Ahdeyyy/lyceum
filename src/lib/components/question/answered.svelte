<script>
	export let qn;
	let correct = qn.selected === qn.answer;
</script>

<div class="bg-base-100 mx-2 my-3 px-10 py-10 rounded-lg shadow-md relative">
	<span class="absolute top-0 right-0">
		{#if correct}
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-6 w-6 text-success-content bg-success rounded-2xl"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
			</svg>
		{:else}
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-6 w-6 text-error-content bg-error rounded-2xl"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M6 18L18 6M6 6l12 12"
				/>
			</svg>
		{/if}
	</span>

	<p class="my-2.5 mx-2">
		{qn.number}. &nbsp;
		{@html qn.body}
	</p>
	{#each qn.options as item}
		{#if item.char == qn.answer}
			<!-- correct option -->
			<div class="form-control my-3 p-1 bg-success rounded">
				<label class="label cursor-pointer">
					<span class="label-text text-x text-success-content">{item.body}</span>
					<input disabled value={item.char} type="radio" name={qn.id} class="mx-2 radio" />
				</label>
			</div>
		{:else if item.char == qn.selected}
			<!-- selected option -->
			<div
				class:bg-success={correct}
				class:bg-error={!correct}
				class="form-control my-3 p-1 rounded"
			>
				<label class="label cursor-pointer">
					<span
						class:text-success-content={correct}
						class:text-error-content={!correct}
						class="label-text text-x">{item.body}</span
					>
					<input
						disabled
						value={item.char}
						type="radio"
						name={qn.id}
						class="mx-2 radio checked:bg-primary"
						checked="true"
					/>
				</label>
			</div>
		{:else}
			<!-- other options -->
			<div class="form-control my-3 p-1">
				<label class="label cursor-pointer">
					<span class="label-text text-x ">{item.body}</span>
					<input
						disabled
						value={item.char}
						type="radio"
						name={qn.id}
						class="mx-2 radio checked:bg-primary"
					/>
				</label>
			</div>
		{/if}
	{/each}
</div>
