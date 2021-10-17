<script>
  import { fade, fly } from "svelte/transition";
</script>

<div
  class="container"
  in:fly={{ y: 50, duration: 600, delay: 400 }}
  out:fade={{ duration: 200 }}
>
  <h1>Hi, I am Slava</h1>
  <p>And this is the main page</p>
</div>
