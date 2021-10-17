<script lang="ts">
  import { writable } from "svelte/store";
  let current = "main";
</script>

<div class="container">
  <div class="item title">VDTLV</div>
  <div class="item menu">
    <div class="arrow menu-item item">→</div>
    <div class="list menu-item item">
      <ul
        class={current === "main"
          ? "main"
          : current === "about"
          ? "about"
          : current === "projects"
          ? "projects"
          : "work"}
      >
        <li
          on:click={() => (current = "main")}
          class={current === "main" ? "active" : ""}
        >
          ●
        </li>
        <li
          on:click={() => (current = "about")}
          class={current === "about" ? "active" : ""}
        >
          About
        </li>
        <li
          on:click={() => (current = "projects")}
          class={current === "projects" ? "active" : ""}
        >
          Projects
        </li>
        <li
          on:click={() => (current = "work")}
          class={current === "work" ? "active" : ""}
        >
          Work
        </li>
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
    margin-left: 14px;
    padding-left: 0;
    color: #bababa;
  }
  li {
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
