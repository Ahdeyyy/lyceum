<script>
    import Alert from "$lib/components/formAlert.svelte";

    export let form;
    
</script>


<main class="flex justify-center" >
    <form class="card w-96 bg-base-100 shadow-xl" action="?/login" method="post">
        <div class="card-body">
            <h2 class="card-title">Login</h2>
            <div class="form-control">
                <label class="label " for="email">
                    <span class="label-text" >
                        Email
                    </span>
                </label>
                <input class="input input-bordered w-full max-w-xs" type="email" name="email" id="email">
            </div>
            <div class="form-control">
                <label class="label " for="password">
                    <span class="label-text" >
                        Password
                    </span>
                </label>
                <input class="input input-bordered w-full max-w-xs" type="password" name="password" id="password">

                {#if form?.error}
                    <Alert type="error" />
                {/if}

            </div>

            <div class="card-actions">
                <button class="btn btn-primary" type="submit">Login</button>
            </div>

            <p>
                Don't have an account? <a href="/signup" class="link text-primary">sign up</a>
             </p>

        </div>
    </form>
</main>
