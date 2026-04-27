<script lang="ts">
  import ClipboardItem from "../components/clipboard-item.svelte";
  import "../global.css";
</script>

<div class=" space-y-1 mt-3">
  {#each Array(7) as _, i}
    <ClipboardItem />
  {/each}
</div>
