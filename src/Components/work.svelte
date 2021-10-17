<script>
  import { fade, fly } from "svelte/transition";
</script>

<div
  class="container"
  in:fly={{ y: 50, duration: 600, delay: 400 }}
  out:fade={{ duration: 200 }}
>
  <p>Everything is fine for now</p>
</div>
