<script>
	import { select_options } from 'svelte/internal';

	/** @type {import('./$types').PageData} */
	export let data;

	let submitted = false;
	let incorrect = [];

	function submitQnA() {
		questions.forEach((question) => {
			if (question.answer === question.selected) {
				question.correct = true;
			} else {
				question.correct = false;
			}
		});
		let correct = questions.filter((q) => q.answer === q.selected);
		incorrect = questions.filter((q) => q.answer !== q.selected);

		let score = correct.length / questions.length;
		submitted = true;
		document.getElementById('my-modal-3').click();
	}

	let questions = data.questions.items.map((q) => {
		return {
			id: q.id,
			body: q.body,
			answer: q.answer,
			options: q.options,
			selected: '',
			correct: null
		};
	});
</script>

<main>
	<div class="text-2xl my-2 rounded shadow-md p-4">
		<p>{data.course.name} : {data.course.code}</p>
	</div>

	<div class="card shadow-lg">
		{#each questions as qn, i}
			<div class="card-body">
				<h2 class="card-title">{i + 1}. {qn.body}</h2>
				{#each qn.options as item}
					<div class="form-control">
						<label class="label cursor-pointer">
							<span class="label-text text-x ">{item.body}</span>
							<input
								value={item.char}
								type="radio"
								name={qn.id}
								class="mx-2 radio checked:bg-primary"
								on:click={(e) => {
									qn.selected = e.target.value;
								}}
							/>
							<!-- content here -->
						</label>
					</div>
				{/each}
				{#if submitted}
					{#if qn.correct}
						<!-- content here -->
						<div class="alert alert-success shadow-lg">
							<div>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="stroke-current flex-shrink-0 h-6 w-6"
									fill="none"
									viewBox="0 0 24 24"
									><path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
									/></svg
								>
								<span>You got the answer right.</span>
							</div>
						</div>
					{:else}
						<!-- else content here -->
						<div class="alert alert-error shadow-lg">
							<div>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="stroke-current flex-shrink-0 h-6 w-6"
									fill="none"
									viewBox="0 0 24 24"
									><path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
									/></svg
								>
								<span>You got the answer wrong.</span>
							</div>
						</div>
					{/if}
				{/if}
			</div>
		{/each}
		<!-- The button to open modal -->
		<label for="my-modal-3" class="btn btn-primary my-2 mx-3">Submit</label>

		<!-- Put this part before </body> tag -->
		<input type="checkbox" id="my-modal-3" class="modal-toggle" />
		<div class="modal">
			<div class="modal-box relative">
				<label for="my-modal-3" class="btn btn-primary btn-sm btn-circle absolute right-2 top-2"
					>✕</label
				>
				<p class="py-4">Do you want to submit your answers?</p>
				<div class="modal-action">
					<button for="my-modal-3" class="btn btn-success my-2 mx-3" on:click={submitQnA}
						>Yes</button
					>
				</div>
			</div>
		</div>
	</div>

	{#if submitted}
		<!-- content here -->
		<div class="my-6">
			<div class="divider text-xl">Solutions</div>
			<div class="card shadow-lg my-4">
				{#each incorrect as qn, i}
					<div class="card-body">
						<h2 class="card-title">{i + 1}. {qn.body}</h2>
						{#each qn.options as item}
							{#if item.char == qn.answer}
								<div class="form-control bg-success rounded">
									<label class="label cursor-pointer">
										<span class="label-text text-x text-success-content ">{item.body}</span>
										<input
											disabled
											value={item.char}
											type="radio"
											name={qn.id}
											class="mx-2 radio checked:bg-primary"
											on:click={(e) => {
												qn.selected = e.target.value;
											}}
                                            checked=true
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
				{/each}
			</div>
		</div>
	{/if}
</main>

<!-- content here -->
