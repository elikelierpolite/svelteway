<script lang="ts">
	import '../app.css';
  import Layout from '$lib/components/Layout.svelte';
  import type { LayoutData } from './$types';
	import { onMount } from 'svelte';
  export let data: LayoutData;
</script>

<Layout data>
  <slot />
</Layout>