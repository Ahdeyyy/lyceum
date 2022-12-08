<script>
	import { Navbar } from '$lib/components/';
	import '$lib/global.css';
	import '$lib/katex/katex.min.css';
	import { inject } from '@vercel/analytics';

	export let data;
</script>

<Navbar {data}>
	<section>
		<slot />
	</section>
</Navbar>
