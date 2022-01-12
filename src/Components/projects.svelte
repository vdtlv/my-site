<script>
  import { fade, fly } from "svelte/transition";
</script>

<div
  class="main"
  in:fly={{ y: 20, duration: 200, delay: 200 }}
  out:fade={{ duration: 200 }}
>
  <div class="project">
    <img width="" alt="pr1" />
    <h6>Project 1 →</h6>
  </div>
  <div class="project">
    <img width="" alt="pr2" />
    <h6>Project 2</h6>
  </div>
  <div class="project">
    <img width="" alt="pr3" />
    <h6>Project 3</h6>
  </div>
  <div class="project">
    <img width="" alt="pr4" />
    <h6>Project 4</h6>
  </div>
</div>

<style>
  .main {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-content: stretch;
    gap: 16px;
    color: var(--text-color);
    column-gap: 24px;
    padding: 1em;
    margin: 0 auto;
  }

  img {
    width: 90vw;
    height: auto;
  }

  h6 {
    margin-top: 0.5em;
    font-size: 1.3em;
  }

  h6:hover {
    text-decoration: underline;
  }

  @media (min-width: 920px) {
    .main {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-evenly;
      align-content: stretch;
      gap: 16px;
    }
    img {
      width: 40vw;
    }
    h6 {
      width: fit-content;
      height: auto;
      color: var(--text-color);
      font-size: 2em;
    }
  }
</style>
