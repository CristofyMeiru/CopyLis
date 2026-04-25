<script>
  let { children } = $props();
</script>

<main
  data-tauri-drag-region
  class=" p-4 border border-neutral-600 text-white bg-neutral-900 h-screen"
>
  {@render children?.()}
</main>
