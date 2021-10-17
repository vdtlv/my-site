<script>
  import { fade, fly } from "svelte/transition";
</script>

<div
  class="container"
  in:fly={{ y: 20, duration: 200, delay: 200 }}
  out:fade={{ duration: 200 }}
>
  <p>Everything is fine for now</p>
</div>
