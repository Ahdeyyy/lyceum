<script>
	import { QuestionList, SubmitQuestions, ResultNotification } from '$lib/components/';

	export let data;

	let submitted = false;
	let incorrect = [];
	let correct = [];
	$: if (submitted) document.getElementById('result').scrollIntoView();

	function submitQnA() {
		questions.forEach((question) => {
			if (question.answer === question.selected) {
				question.correct = true;
			} else {
				question.correct = false;
			}
		});
		correct = questions.filter((q) => q.answer === q.selected);
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
	<div class="text-2xl my-2 rounded p-4">
		<p>Course : {data.course.name} | {data.course.code}</p>
	</div>

	<div id="result" />

	{#if !submitted}
		<QuestionList {questions} {submitted} />

		{#if questions.length > 0}
			<SubmitQuestions func={submitQnA} />
		{:else}
			<div class="text-center text-2xl my-2 rounded p-4">
				<p>There are no questions available for this course</p>
			</div>
		{/if}
	{:else}
		<div id="result">
			<ResultNotification incorrect={incorrect.length} correct={correct.length} />
		</div>

		<div class="text-center text-2xl my-2 rounded p-4">
			<p>Answers</p>
		</div>

		<QuestionList {questions} {submitted} />
		<button class="btn btn-primary w-full" onclick="location.reload()"> Restart </button>
	{/if}
</main>
