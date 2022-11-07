<script>
    export let func;
</script>

<label for="my-modal-3" class="btn btn-primary my-2 w-11/12 mx-4">Submit</label>

<input type="checkbox" id="my-modal-3" class="modal-toggle" />
<div class="modal">
	<div class="modal-box relative">
		<label for="my-modal-3" class="btn btn-primary btn-sm btn-circle absolute right-2 top-2"
			>✕</label
		>
		<p class="py-4">Do you want to submit your answers?</p>
		<div class="modal-action">
			<button for="my-modal-3" class="btn btn-success my-2 mx-3" on:click={func}>Yes</button>
		</div>
	</div>
</div>
