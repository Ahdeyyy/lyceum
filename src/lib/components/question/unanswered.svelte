<script>
	export let qn;
</script>

<div class="mx-5 rounded my-5 shadow-md">
	<div class="card-body bg-base-100">
		<p class="my-2.5 mx-2 font-semibold">
			{qn.number}. &nbsp;
			{@html qn.body}
		</p>
		{#each qn.options as option}
			<div
				class="form-control my-1 p-1 rounded shadow-lg hover:scale-105 hover:shadow-xl transition ease-in-out duration-500"
			>
				<label class="label cursor-pointer">
					<span class="label-text">{option.body}</span>
					<input
						value={option.char}
						type="radio"
						name={qn.id}
						class="mx-2  radio checked:bg-primary"
						on:click={(e) => {
							qn.selected = e.target.value;
						}}
					/>
				</label>
			</div>
		{/each}
	</div>
</div>
