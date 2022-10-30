<script>

</script>

<main class="flex justify-center" >
    <form class="card w-96 bg-base-100 shadow-xl" action="?/register" method="post">
        <div class="card-body">
            <h2 class="card-title">Sign up</h2>
            <div class="form-control">
                <label class="label " for="name">
                    <span class="label-text" >
                        Name
                    </span>
                </label>
                <input class="input input-bordered w-full max-w-xs" type="text" name="name" id="">

            </div>
            <div class="form-control">
                <label class="label " for="email">
                    <span class="label-text" >
                        Email
                    </span>
                </label>
                <input class="input input-bordered w-full max-w-xs" type="email" name="email" id="">
            </div>
            <div class="form-control">
                <label class="label " for="password">
                    <span class="label-text" >
                        Password
                    </span>
                </label>
                <input class="input input-bordered w-full max-w-xs" type="password" name="password" id="">
            </div>

            <div class="form-control">
                <label class="label " for="passwordConfirm">
                    <span class="label-text" >
                        Confirm password
                    </span>
                </label>
                <input class="input input-bordered w-full max-w-xs" type="password" name="passwordConfirm" id="">
            </div>

            <p>
               Already have an account? <a href="/login" class="link text-primary ">login</a>
            </p>

            <div class="card-actions">
                <button class="btn btn-primary" type="submit">Sign up</button>
            </div>




        </div>
    </form>
</main>