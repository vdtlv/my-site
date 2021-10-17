<!-- svelte-ignore missing-declaration -->
<script lang="ts">
  import { page } from "./stores.js";
</script>

<div class="container">
  <div class="item title">VDTLV</div>
  <div class="item menu">
    <div class="arrow menu-item item">→</div>
    <div class="list menu-item item">
      <ul
        class={$page === 0
          ? "main"
          : $page === 1
          ? "about"
          : $page === 2
          ? "projects"
          : "work"}
      >
        <li on:click={page.main} class={$page == 0 ? "active" : ""}>●</li>
        <li on:click={page.about} class={$page === 1 ? "active" : ""}>About</li>
        <li on:click={page.projects} class={$page === 2 ? "active" : ""}>
          Projects
        </li>
        <li on:click={page.work} class={$page === 3 ? "active" : ""}>Work</li>
      </ul>
    </div>
  </div>
</div>

<style>
  .container {
    height: 180px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: baseline;
    align-content: center;
  }
  .item {
    align-self: center;
    color: #222222;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
  }
  .title {
    color: #222222;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    width: 50%;
  }
  .menu {
    height: 100px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: baseline;
    align-content: center;
  }
  ul {
    list-style-type: none;
    line-height: 26px;
    margin-left: 16px;
    padding-left: 0;
    color: #bababa;
    transition-property: padding-top, padding-bottom;
    transition-duration: 0.5s;
  }

  li:hover,
  li:active {
    width: min-content;
    background-color: #fbfbfb;
    transition: 0.2s;
  }

  li {
    border-radius: 4px;
    padding: 0 8px 0 8px;
    cursor: pointer;
  }
  .active {
    color: #222222;
  }
  .main {
    padding-top: 76px;
  }
  .about {
    padding-top: 26px;
  }
  .projects {
    padding-bottom: 26px;
  }
  .work {
    padding-bottom: 76px;
  }
</style>
