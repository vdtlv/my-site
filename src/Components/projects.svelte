<script>
  import { fade, fly } from "svelte/transition";
</script>

<div
  class="main"
  in:fly={{ y: 20, duration: 200, delay: 200 }}
  out:fade={{ duration: 200 }}
>
  <p>A bunch of my projects will be here a bit later</p>
</div>

<style>
  :global(body.projects) {
    --bg-color: #222;
    --hover: #2d2d2d;
    --text-color: #fff;
    --default: #808080;
    /*transition: background-color 0.3s;*/
  }

  .main {
    color: var(--text-color);
    padding: 1em;
    margin: 0 auto;
  }

  @media (min-width: 640px) {
    .main {
      max-width: 768px;
    }
  }
</style>
