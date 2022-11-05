<script>
	import Navbar from './../../lib/components/navbar.svelte';
	import '$lib/global.css';
</script>

<Navbar>
	<section class="flex justify-center my-3" >
		<slot />
	</section>
</Navbar>

