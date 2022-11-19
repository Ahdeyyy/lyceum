<script>
	import { Navbar } from '$lib/components/';
	import '$lib/global.css';

	export let data;
</script>

<Navbar {data}>
	<section class="">
		<slot />
	</section>
</Navbar>
