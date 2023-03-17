<script>
    import "grapesjs/dist/css/grapes.min.css";
    import grapesjs from "grapesjs";
    import plugin from "$lib/index";;
    import { onMount } from "svelte";
  
    onMount(() => {
      const editor = grapesjs.init({
        container: "#gjs",
        plugins: [plugin],
      });
    });
  </script>
  
  <div id="gjs" />
  