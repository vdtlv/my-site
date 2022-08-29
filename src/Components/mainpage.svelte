<script>
  import { fade, fly } from "svelte/transition";
</script>

<div
  class="main"
  style="height: calc(100% - 212px);"
  in:fly={{ y: 20, duration: 200, delay: 200 }}
  out:fade={{ duration: 200 }}
>
<div class="grid">
  <a class="links" target="_blank" href="https://vdtlv.notion.site">
    <p class="f">Curated collection of tools and services</p>
    <p class="description"> Click to see more </p>
  </a>
  <a class="craydle" target="_blank" href="https://craydle.ml">
    <p class="f">Game with AI-generated images</p>
    <p class="description"> Click to see more </p>
  </a>
  <a class="projects" href="/#/projects">
    <p class="f">All projects</p>
    <p class="description"> Click to see more </p>
  </a>
</div>
  <div class="sub">
  <h1>Hi, I am Slava</h1>
  <p>And I am updating this website<br>as fast as possible <br><br> 🤡🤡🤡</p>
  </div>
  
</div>

<style>

  .grid{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 24px;
    /*grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    grid-template-areas: 
    "links craydle"
    "projects projects";
    column-gap: 16px;
    row-gap: 16px;*/
  }

  .sub {
    display: block;
    text-align: center;
  }

  .description {
    display: block;
    text-align: left;
    opacity: 0.1;
    transition: opacity 0.3s;
  }
  
  .main {
    padding: 0px 1em;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .f {
    font-weight: 700;
    font-size: 24px;
    margin: 0;
  }

  a {
    text-decoration: none;
    color: var(--text-color);
    padding: 24px 16px 8px 20px;
    display: grid;
    flex-direction: column;
    justify-content: space-between;
    align-content: space-between;
    border-radius: 16px;
    box-shadow: 0px 2px 16px rgba(51, 51, 51, 0.1);
    transition: box-shadow 0.5s;
  }

  .links {
    width: 100%;

    /*grid-column-start: 1;
    grid-column-end: span 1;
    grid-row-start: 1;
    grid-row-end: span 1;*/
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0)), url("../Images/links.jpg");
    background-repeat: no-repeat;
    background-size: cover;
  }

  .craydle {
    width: 100%;
    
    /*grid-column-start: 2;
    grid-column-end: span 2;
    grid-row-start: 1;
    grid-row-end: span 1;*/
    background: linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0)), url("../Images/imgs.jpg");
    background-repeat: no-repeat;
    background-size: cover;
  }

  .projects {
    width: 100%;

    grid-column-start: 1;
    grid-column-end: span 2;
    grid-row-start: 2;
    grid-row-end: span 2;
    background-color: var(--text-color);
  }

  .projects > p {
    color: white;
  }

  a:hover { 
    box-shadow: 0px 2px 16px rgba(51, 51, 51, 0.2);
  }

  a:hover > .description {
    opacity: .9;
  }

  @media (min-width: 640px) {
    .links, .craydle {
      height: 189px;
      width: 336px;
    }
    .main {
      max-width: 768px;
    }
    .f {
    display: block;
  }
  }
</style>
