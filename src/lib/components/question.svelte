<script>
	export let qn;
</script>

<div class="card shadow-lg">
    <div class="card-body">
        <p class="my-2.5 mx-2" >
            {qn.number}. &nbsp;
            {qn.body}
        </p>
        {#each qn.options as option}
            <div class="form-control my-1 p-1.5 rounded shadow-lg">
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
