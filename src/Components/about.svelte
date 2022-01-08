<script>
  import { fade, fly } from "svelte/transition";
</script>

<div
  class="main"
  in:fly={{ y: 20, duration: 200, delay: 200 }}
  out:fade={{ duration: 200 }}
>
  <h2>I like playing with svelte</h2>
  <p>for sure i dont really</p>
</div>

<style>
  .main {
    padding: 1em;
    margin: 0 auto;
  }

  @media (min-width: 640px) {
    .main {
      max-width: 768px;
    }
  }
</style>
