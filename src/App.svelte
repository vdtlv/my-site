<script>
  import Nav from "./Components/nav.svelte";
  import Main from "./Components/mainpage.svelte";
  import About from "./Components/about.svelte";
  import Projects from "./Components/projects.svelte";
  import Work from "./Components/work.svelte";
  import { page } from "./Components/stores.js";
</script>

<main>
  <Nav />
  {#if !$page}
    <Main />
  {:else if $page == 1}
    <About />
  {:else if $page == 2}
    <Projects />
  {:else if $page == 3}
    <Work />
  {/if}
</main>

<style>
  main {
    padding: 1em;
    margin: 0 auto;
  }

  @media (min-width: 640px) {
    main {
      max-width: 768px;
    }
  }
</style>
