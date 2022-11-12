<script>
	import { parseStringToQuestion } from '$lib/utils.js';
	import { fly } from 'svelte/transition';
	export let data;
	let options = [];
	function addOption(e) {
		e.preventDefault();
		const opt = {
			body: document.getElementById('option-body').value,
			char: document.getElementById('option-char').value
		};

		options.push(opt);
		options = [...options];
		document.getElementById('option-body').value = '';
		document.getElementById('option-char').value = '';
	}

	function deleteOption(e, index) {
		console.log(e, index);
		e.preventDefault();
		options.splice(index, 1);
		options = [...options];
	}

	function addQandOpt(e) {
		e.preventDefault();
		let { question, opts } = parseStringToQuestion(document.getElementById('string').value);
		console.log(question, opts);
		document.getElementById('body').value = question;
		options = [];
		options = [...opts];
	}

	// export options to the server
	function submit(e) {
		e.preventDefault();
		const form = document.getElementById('form');
		const input = document.createElement('input');
		input.type = 'hidden';
		input.name = 'options';
		input.value = JSON.stringify(options);
		form.appendChild(input);
		form.submit();
	}
</script>

<main class="flex flex-col justify-center">
	<form class="card w-96 bg-base-100 shadow-xl" action="?/add" method="post" id="form">
		<div class="card-body my-2 shadow-lg ">
			<div class="card-title">
				<h2 class="text-2xl">New Question</h2>
			</div>

			<div class="form-control">
				<label class="label" for="course">
					<span class="label-text">Select Course</span>
				</label>
				<select name="course" id="course" class="select select-bordered" required>
					<option disabled selected>Pick the course</option>
					{#each data.courses.items as item}
						<option value={item.id}>{item.name} | {item.code}</option>
					{/each}
				</select>
			</div>

			<div class="form-control">
				<label class="label" for="body">
					<span class="label-text">Question body</span>
				</label>
				<textarea
					name="body"
					id="body"
					class="textarea textarea-bordered h-24"
					placeholder="Enter the question body"
					required
				/>
			</div>

			<div class="form-control">
				<label class="label" for="answer">
					<span class="label-text"> Answer </span>
				</label>
				<input
					class="input input-bordered w-full max-w-xs"
					placeholder="B"
					type="text"
					name="answer"
					id="answer"
					required
				/>
			</div>

			<div class="divider">OPTIONS</div>

			{#each options as option, index}
				<div
					transition:fly={{ x: 100, duration: 1000 }}
					class="px-8 py-2 shadow-lg bg-accent text-accent-content rounded flex"
				>
					<p>{option.body} : {option.char}</p>
					<button
						on:click={(e) => {
							deleteOption(e, index);
						}}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="w-6 h-6"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
							/>
						</svg>
					</button>
				</div>
			{/each}

			<div class="form-control">
				<label class="label" for="option-body">
					<span class="label-text"> Option body </span>
				</label>
				<input
					class="input input-bordered w-full max-w-xs"
					type="text"
					name="option-body"
					id="option-body"
				/>
			</div>
			<div class="form-control">
				<label class="label" for="option-char">
					<span class="label-text"> Option character </span>
				</label>
				<input
					class="input input-bordered w-full max-w-xs"
					type="text"
					name="option-body"
					id="option-char"
					placeholder="A"
				/>
			</div>
			<button class="btn btn-primary" on:click={addOption}> Add Option </button>

			<div class="form-control">
				<label class="label" for="string">
					<span class="label-text">Question string</span>
				</label>
				<textarea
					name="string"
					id="string"
					class="textarea textarea-bordered h-24"
					placeholder="Enter the question with options"
					required
				/>
			</div>
			<button class="btn btn-primary" on:click={addQandOpt}> Add Question and Options </button>

			<div class="card-actions">
				<button on:click={submit} class="btn btn-primary" type="submit">Create</button>
			</div>
		</div>
	</form>
</main>
