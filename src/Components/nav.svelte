<!-- svelte-ignore missing-declaration -->
<script lang="ts">
  import { page } from "./stores.js";

  function toggle() {
    if ($page == 0 || $page == 2) {
      window.document.body.classList.remove("about-mode", "work-mode");
    }

    if ($page == 1) {
      window.document.body.classList.remove("work-mode");
      window.document.body.classList.add("about-mode");
    }

    if ($page == 3) {
      window.document.body.classList.remove("about-mode");
      window.document.body.classList.add("work-mode");
    }
  }
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
        <li
          on:click={page.main}
          on:click={toggle}
          class={$page == 0 ? "active" : ""}
        >
          ●
        </li>
        <li
          on:click={page.about}
          on:click={toggle}
          class={$page === 1 ? "active" : ""}
        >
          About
        </li>
        <li
          on:click={page.projects}
          on:click={toggle}
          class={$page === 2 ? "active" : ""}
        >
          Projects
        </li>
        <li
          on:click={page.work}
          on:click={toggle}
          class={$page === 3 ? "active" : ""}
        >
          Work
        </li>
      </ul>
    </div>
  </div>
</div>

<style>
  :global(body.about-mode) {
    background-color: #ffd80d;
    color: #222;
    transition-delay: 0.2s;
    transition: background-color 0.2s;
  }

  :global(body.work-mode) {
    background-color: #1544bb;
    color: #fff;
    transition-delay: 0.2s;
    transition: background-color 0.2s;
  }

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

    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
  }
  .title {
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
    transition-duration: 0.2s;
  }
  :global(body.about-mode) ul {
    color: #fff;
  }
  :global(body.work-mode) ul {
    color: #a8bef5;
  }

  li:hover {
    width: min-content;
    background-color: #fbfbfb;
    transition: 0.2s;
    transition: 0.2s;
    cursor: pointer;
  }

  :global(body.about-mode) li:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
  :global(body.work-mode) li:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  .main > .active {
    color: #ffd80d;
  }

  li {
    border-radius: 4px;
    padding: 0 8px 0 8px;
  }
  .active {
    color: #222;
    align-items: baseline;
  }
  :global(body.work-mode) .active {
    color: #fff;
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
