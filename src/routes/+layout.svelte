<script lang="ts">
  import { applyTheme } from "@utils";
  import { onMount } from "svelte";

  let { children } = $props();

  onMount(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");

    const handler = (e: any) => {
      applyTheme(e.matches ? "dark" : "light");
    };

    media.addEventListener("change", handler);

    return () => {
      media.removeEventListener("change", handler);
    };
  });
</script>

<main
  data-tauri-drag-region
  class=" bg-background text-foreground p-4 border border-border h-screen"
>
  <h1
    class=" text-lg font-semibold"
    data-tauri-drag-region
  >
    Clipboard
  </h1>
  {@render children?.()}
</main>
