<script lang="ts">
  export let value = "Conteudo a ser copiado";
</script>

<textarea
  bind:value
  readonly
  class="w-full select-none h-24 overflow-hidden resize-y border border-border bg-accent hover:bg-accent/50 text-foreground p-3 text-sm outline-none"
></textarea>
