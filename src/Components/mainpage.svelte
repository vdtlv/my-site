<script>
  import { fade, fly } from "svelte/transition";
</script>

<div
  class="main"
  in:fly={{ y: 20, duration: 200, delay: 200 }}
  out:fade={{ duration: 200 }}
>
  <h1>Hi, I am Slava</h1>
  <p>And I am updating this website as fast as it's possible</p>
  <p>🤡🤡🤡</p>
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
