<script>
  import Router, { location, link } from "svelte-spa-router";
  import active from "svelte-spa-router/active";
  import Main from "./Components/mainpage.svelte";
  import About from "./Components/about.svelte";
  import Projects from "./Components/projects.svelte";
  import Work from "./Components/work.svelte";
  import { page } from "./Components/stores.js";
</script>

<main>
  <div class="container">
    <div class="item title">
      VDTLV <span class="location">{$location}</span>
    </div>
    <div class="item menu">
      <div class="item arrow">→</div>
      <nav>
        <ul
          class={$location === "/"
            ? "home"
            : $location === "/about"
            ? "about"
            : $location === "/projects"
            ? "projects"
            : $location === "/work"
            ? "work"
            : ""}
        >
          <li>
            <a
              href="/"
              use:link
              use:active={{
                path: "/",
                className: "home",
                inactiveClassName: "inactive",
              }}>●</a
            >
          </li>
          <li>
            <a
              href="/about"
              use:link
              use:active={{
                path: "/about",
                className: "about",
                inactiveClassName: "inactive",
              }}>About</a
            >
          </li>
          <li>
            <a
              href="/projects"
              use:link
              use:active={{
                path: "/projects",
                className: "projects",
                inactiveClassName: "inactive",
              }}>Projects</a
            >
          </li>
          <li>
            <a
              href="/work"
              use:link
              use:active={{
                path: "/work",
                className: "work",
                inactiveClassName: "inactive",
              }}>Work</a
            >
          </li>
        </ul>
      </nav>
    </div>
  </div>
</main>

<Router
  routes={{
    "/": Main,
    "/about": About,
    "/projects": Projects,
    "/work": Work,
  }}
/>

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
    width: 50%;
  }
  .location {
    color: rgba(77, 77, 77, 0.021);
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
    padding: 0;
    transition-property: margin-top, padding-bottom;
    transition-duration: 0.2s;
  }

  li {
    padding-left: 4px;
    list-style-type: none;
  }
  a {
    list-style-type: none;
    line-height: 26px;
    border-radius: 4px;
    padding: 0 8px 0 8px;
  }
  a:hover {
    text-decoration: none;
    width: min-content;
    background-color: #fbfbfb;
    transition: 0.2s;
    cursor: pointer;
  }

  nav {
    position: absolute;
    padding-left: 16px;
  }

  .home {
    margin-top: 37px;
  }
  .about {
    margin-top: 11px;
  }
  .projects {
    margin-top: -15px;
  }
  .work {
    margin-top: -41px;
  }

  :global(a.work) {
    color: #1544bb;
  }

  :global(a.about, a.projects) {
    color: #222;
  }
  :global(a.home) {
    color: #ffd80d;
  }
  :global(a.inactive) {
    color: #bababa;
  }
</style>
