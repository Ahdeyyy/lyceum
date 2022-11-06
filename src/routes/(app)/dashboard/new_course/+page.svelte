<script>
</script>

<main class="flex flex-col justify-center">
	<form class="card w-96 bg-base-100 shadow-xl" action="?/add" method="post">
		<div class="card-body my-2 shadow-lg ">
			<div class="card-title">
				<h2 class="text-2xl">New Course</h2>
			</div>

			<div class="form-control">
				<label class="label" for="name">
					<span class="label-text">Name</span>
				</label>
				<input class="input input-bordered w-full max-w-xs" type="text" name="name" id="name" />
			</div>
			<div class="form-control">
				<label class="label" for="code">
					<span class="label-text">Code</span>
				</label>
				<input class="input input-bordered w-full max-w-xs" type="text" name="code" id="code" />
			</div>
			<div class="form-control">
				<label for="slug">
					<span class="label-text">Slug</span>
				</label>
				<input class="input input-bordered w-full max-w-xs" type="text" name="slug" id="slug" />
			</div>

			<div class="card-actions">
				<button class="btn btn-primary" type="submit">Create</button>
			</div>
		</div>
	</form>
</main>
