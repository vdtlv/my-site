<script>
  import { fade, fly } from "svelte/transition";
</script>

<div
  class="main"
  style="height: calc(100% - 212px);"
  in:fly={{ y: 20, duration: 200, delay: 200 }}
  out:fade={{ duration: 200 }}
>
  <div>
    <p class="f">I am collecting services, can help in design process.</p>
    <a class="button" href="https://vdtlv.notion.site"> List of links → </a>
  </div>

  <div class="sub">
  <h1>Hi, I am Slava</h1>
  <p >And I am updating this website<br>as fast as possible <br><br> 🤡🤡🤡</p>
  </div>
  
</div>

<style>

  .sub {
    display: block;
    text-align: center;
  }
  .button {
    display: block;
    background-color: var(--hover);
    border: none;
    border-radius: 4px;
    padding: 14px 16px;
    margin: 8px 0px;
    font-weight: bold;
    font-size: 1em;
    color: var(--text-color);
    transition: background-color 0.3s;
    text-align: center;
  }
  .button:hover{
      text-decoration: none;
      background-color: #e9e9e9;
      transition: background-color 0.3s;
    }
  
  .main {
    padding: 0px 1em;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }


  @media (min-width: 640px) {
    .button { 
      width: fit-content;
    }
    .main {
      max-width: 768px;
    }
    .f {
    display: block;
    width: 200px;
  }
  }
</style>
