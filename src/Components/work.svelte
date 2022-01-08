<script>
  import { fade, fly } from "svelte/transition";
</script>

<div
  class="main"
  in:fly={{ y: 20, duration: 200, delay: 200 }}
  out:fade={{ duration: 200 }}
>
  <p>
    Everything is fine for now <br /><br /> I am working at
    <a href="https://rightontrek.com">RightOnTrek</a>
    and trying to develop my pet-projects like
    <a href="https://educt.ru">this one</a>
  </p>
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
