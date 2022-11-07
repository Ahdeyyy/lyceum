<script>
	export let qn;
	let correct = qn.selected === qn.answer;
</script>

<div>
	<div class="card-body">
		<p class="my-2.5 mx-2">
			{qn.number}. &nbsp;
			{qn.body}
		</p>
		{#each qn.options as item}
			{#if item.char == qn.answer}
				<div class="form-control bg-success rounded">
					<label class="label cursor-pointer">
						<span class="label-text text-x text-success-content">{item.body}</span>
						<input
							disabled
							value={item.char}
							type="radio"
							name={qn.id}
							class="mx-2 radio"
							on:click={(e) => {
								qn.selected = e.target.value;
							}}
						/>
					</label>
				</div>
			{:else if item.char == qn.selected}
				<div class:bg-success={correct} class:bg-error={!correct} class="form-control rounded">
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
							on:click={(e) => {
								qn.selected = e.target.value;
							}}
							checked="true"
						/>
					</label>
				</div>
			{:else}
				<!-- else content here -->
				<div class="form-control">
					<label class="label cursor-pointer">
						<span class="label-text text-x ">{item.body}</span>
						<input
							disabled
							value={item.char}
							type="radio"
							name={qn.id}
							class="mx-2 radio checked:bg-primary"
							on:click={(e) => {
								qn.selected = e.target.value;
							}}
						/>
					</label>
				</div>
			{/if}
		{/each}
	</div>
</div>
