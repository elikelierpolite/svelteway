<script>
	import '../app.css';
  import Layout from '$lib/components/Layout.svelte';
  export let data
</script>

<Layout {data}>
  <slot />
</Layout>