<script>
  import { fade, fly } from "svelte/transition";

</script>

<div
  class="main"
  in:fly={{ y: 20, duration: 200, delay: 200 }}
  out:fade={{ duration: 200 }}
>
 
<h2>Since 2023 mentoring junior and middle designers at <a href="https://edutoria.gohelper.io">Helper</a> </h2>
  <h2>At October 2022 become a Product Designer at <a href="https://fitmost.ru">Fitmost</a> </h2>
  <h2>Worked at <a href="https://rightontrek.com">RightOnTrek</a> since September 2021 as UI/UX Designer</h2>
  <!-- svelte-ignore a11y-mouse-events-have-key-events -->
  <h2>Started <a href="https://educt.ru"> Educt</a> with&nbsp;my&nbsp;folks</h2>
  <h2>Graduated from ITMO&nbsp;University in 2021</h2>
  <h2>First experience in startup with a nice team</h2>
</div>

<style>
  :global(body.work) {
    --bg-color: #1544bb;
    --hover: #2c57c2;
    --text-color: #fff;
    --default: #a8bef5;
    /*transition: background-color 0.3s;*/
  }

  .main {
    color: var(--text-color);
    padding: 1em;
    margin: 0 auto;
    max-width: 100%;
  }

  h2 {
    font-size: 2rem;
    transition: color 0.3s;
    color: var(--default);
  }

    a {
    color: var(--text-color);
  }


  @media (min-width: 640px) {

    .main {
      max-width: 768px;
      gap: 1em 40px;
    }
  }
</style>
