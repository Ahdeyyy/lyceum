<script>
	import '$lib/global.css';
	import { Navbar } from '$lib/components/';

	export let data;
</script>

<Navbar {data}>
	<section class="flex justify-center my-3">
		<slot />
	</section>
</Navbar>
