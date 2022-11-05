<script>
	import Question from '$lib/components/question.svelte';

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

	let questions = data.questions.items.map((q, index) => {
		return {
			number: index + 1,
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

	<div class="mockup-window border border-base-300 shadow-lg">
		{#each questions as qn }
			<Question {qn} />
		{/each}
	</div>

		<!-- The button to open modal -->
		<label for="my-modal-3" class="btn btn-primary my-2 w-full ">Submit</label>

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
</main>

<!-- content here -->
