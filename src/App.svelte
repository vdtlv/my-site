<script lang="ts">
  import { onMount } from "svelte";
  import Router, { location, link } from "svelte-spa-router";
  import active from "svelte-spa-router/active";
  import Main from "./Components/mainpage.svelte";
  import About from "./Components/about.svelte";
  import Projects from "./Components/projects.svelte";
  import Work from "./Components/work.svelte";
  // import { page } from "./Components/stores.js";
  import url from "./url";

  function c() {
    setTimeout(() => {
      if ($url.hash == "#/") {
        console.log("not about", $location, $url.hash);
        window.document.body.classList.add("home");
        window.document.body.classList.remove("about");
        window.document.body.classList.remove("projects");
        window.document.body.classList.remove("work");
      }
      if ($url.hash == "#/about") {
        console.log(" about", $location, $url.hash);
        window.document.body.classList.remove("home");
        window.document.body.classList.remove("projects");
        window.document.body.classList.remove("work");
        window.document.body.classList.add("about");
      }
      if ($url.hash == "#/projects") {
        console.log("projects", $location, $url.hash);
        window.document.body.classList.remove("home");
        window.document.body.classList.remove("about");
        window.document.body.classList.remove("work");
        window.document.body.classList.add("projects");
      }
      if ($url.hash == "#/work") {
        console.log("work", $location, $url.hash);
        window.document.body.classList.remove("home");
        window.document.body.classList.remove("about");
        window.document.body.classList.remove("projects");
        window.document.body.classList.add("work");
      }
    }, 10);
  }
  onMount(() => {
    console.log("onmount", $location, $url.hash);
    if ($url.hash === "#/") {
      console.log("not about", $location, $url.hash);
      window.document.body.classList.toggle("home");
    }
    if ($url.hash == "#/about") {
      console.log(" about", $location, $url.hash);
      window.document.body.classList.toggle("about");
    }
    if ($url.hash == "#/projects") {
      console.log(" about", $location, $url.hash);
      window.document.body.classList.toggle("projects");
    }
    if ($url.hash == "#/work") {
      console.log(" work", $location, $url.hash);
      window.document.body.classList.toggle("work");
    }
  });
</script>

<main>
  <div class="container">
    <div class="item title">VDTLV</div>
    <div class="item menu">
      <div class="item arrow">→</div>
      <nav>
        <!--classes for menu-->
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
              on:click={c}
              use:link
              class={$location === "/" ? "m" : "inactive"}>●</a
            >
          </li>
          <li>
            <a
              href="/about"
              on:click={c}
              use:link
              class={$location === "/about" ? "" : "inactive"}>About</a
            >
          </li>
          <li>
            <a
              href="/projects"
              on:click={c}
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
              on:click={c}
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
  :root {
    --bg-color: #fff;
    --hover: #f2f2f2;
    --text-color: #222;
    --default: #bababa;
    --accent: rgb(240, 108, 0);
    /*transition: background-color 0.3s;*/
  }

  :global(body.about) {
    --bg-color: #ffe24a;
    --hover: #f2d746;
    --text-color: #222;
    --default: #fff;
    --accent: #ffe24a;
    /*transition: background-color 0.3s;*/
  }

  :global(body.projects) {
    --bg-color: #222;
    --hover: #2d2d2d;
    --text-color: #fff;
    --default: #808080;
    --accent: #222;
    /*transition: background-color 0.3s;*/
  }
  :global(body.work) {
    --bg-color: #1544bb;
    --hover: #2c57c2;
    --text-color: #fff;
    --default: #a8bef5;
    --accent: #1544bb;
    /*transition: background-color 0.3s;*/
  }

  :global(body) {
    background-color: var(--bg-color);
    transition: background-color 0.3s;
  }

  .inactive {
    color: var(--default);
    transition: background-color 0.3s;
  }

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
    color: var(--text-color);
    align-self: center;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
  }
  .title {
    width: 50%;
  }
  .m {
    color: var(--accent);
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
    color: var(--text-color);
    line-height: 26px;
    border-radius: 4px;
    padding: 2px 8px;
  }
  a:hover {
    text-decoration: none;
    width: min-content;
    background-color: var(--hover);
    transition: 0.2s;
    cursor: pointer;
  }
  a:visited {
    text-decoration: none;
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
</style>
