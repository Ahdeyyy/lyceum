<script>
	import { Navbar } from '$lib/components/';
	import '$lib/global.css';

	export let data;
</script>

<Navbar {data}>
	<section class="flex justify-center my-3">
		<slot />
	</section>
</Navbar>
