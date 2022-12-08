<script>
	import Hero from '$lib/assets/lyceum-1.avif';
	const imgUrl = new URL('./lyceum-2.avif', import.meta.url).href;
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>
<div class="hero min-h-screen" style="background-image: url('{imgUrl}');">
	<div class="hero-overlay bg-opacity-60" />
	<div class="hero-content text-center">
		<div class="max-w-md">
			<h1 class="text-5xl font-bold">Hey there👋</h1>
			<!-- <img src="./lyceum-2.avif" alt="hero icon" /> -->
			<p class="py-6">
				Practice makes perfect. <br />
				Take Quizes and past questions to improve your knowledge in your courses.
			</p>
			<a href="/courses" class="btn btn-primary">Get Started</a>
		</div>
	</div>
</div>
