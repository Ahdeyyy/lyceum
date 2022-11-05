<script>
	import '$lib/global.css';
	import Navbar from '$lib/components/navbar.svelte';
</script>

<Navbar>
	<section class="flex justify-center my-3" >
		<slot />
	</section>
</Navbar>
