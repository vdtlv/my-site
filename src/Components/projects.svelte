<script>
  import { fade, fly } from "svelte/transition";
</script>

<div
  class="main"
  in:fly={{ y: 20, duration: 200, delay: 200 }}
  out:fade={{ duration: 200 }}
>
<h6> this page will be updated soon, but you still can
<a href="https://vdtlv.notion.site/6c50f368362342208872db178dfb696f">check my projects at notion</a>
</h6>
</div>

<style>
  .main {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    height: calc(100vh - 248px);
    color: #4d4d4d;
    margin: 0px 16px;
    height: -webkit-fill-available;
  }
  
  a {
    color: var(--text-color);
    text-decoration: underline;
  }

  h6 {
    margin: 0px;
    font-size: 3em;
  }

  @media (min-width: 920px) {
    .main{
      align-items: center;
      text-align: center;
    }
    h6 {
      font-size: 5em;
    }
  }
  @media (min-width: 1395px) {
    .main{
      margin: auto;
      max-width: 80%;
    }
    h6 {
      font-size: 7em;
    }

  }
  @media (max-width: 320px) {
    h6 {
      margin: 0px;
      font-size: 2em;
    }
  }
</style>
