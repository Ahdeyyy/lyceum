<script>
	import { QuestionList, SubmitQuestions, ResultNotification } from '$lib/components/';

	export let data;

	let submitted = false;
	let incorrect = [];
	let correct = [];
	$: if (submitted)
		document
			.getElementById('course-name')
			.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });

	function submitQnA() {
		console.log('submitting');
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

	var questions = data.questions.items.map((q, index) => {
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

<main class="bg-base-300 m-5">
	<div id="course-name" class="text-2xl my-2 rounded p-4 text-center uppercase font-bold">
		<p>{data.course.name} | {data.course.code}</p>
	</div>

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
		<div id="result" class="flex justify-center">
			<ResultNotification incorrect={incorrect.length} correct={correct.length} />
		</div>

		<div class="text-center text-2xl my-2 rounded p-4">
			<p>Answers</p>
		</div>

		<QuestionList {questions} {submitted} />
		<button class="btn btn-primary w-full" onclick="location.reload()"> Restart </button>
	{/if}
</main>
