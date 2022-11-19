<script>
	export let type;
	export let name;
	export let id;
	export let required;
	export let label;
	export let placeholder;
</script>

<div class="form-control">
	<label class="label " for={id}>
		<span class="label-text"> {label} </span>
	</label>
	<input class="input input-bordered w-full max-w-xs" {type} {name} {id} {placeholder} {required} />
</div>
