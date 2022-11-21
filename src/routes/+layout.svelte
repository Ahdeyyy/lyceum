<script>
	import { Navbar } from '$lib/components/';
	import '$lib/global.css';
	import { inject } from '@vercel/analytics';

	export let data;
</script>

<Navbar {data}>
	<section class="bg-base-300">
		<slot />
	</section>
</Navbar>
