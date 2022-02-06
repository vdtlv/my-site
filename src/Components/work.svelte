<script>
  import { fade, fly } from "svelte/transition";

  let hoverlink = 0;

  function handleMouseOver(e) {
		hoverlink = 1;
	}
  function handleMouseOver2(e) {
		hoverlink = 2;
	}
  function handleMouseOut(e) {
		hoverlink = 0;
	}

</script>

<div
  class="main"
  in:fly={{ y: 20, duration: 200, delay: 200 }}
  out:fade={{ duration: 200 }}
>

  <!-- svelte-ignore a11y-mouse-events-have-key-events -->
  <h2 class="{hoverlink != 0 ? 'hvr' : ''}">UI/UX Designer at <a class="{hoverlink == 1 ? 'hvr' : ''}" on:mouseover={handleMouseOver2} on:mouseout={handleMouseOut} href="https://rightontrek.com">RightOnTrek</a> since September 2021</h2>
  <!-- svelte-ignore a11y-mouse-events-have-key-events -->
  <h2 class="{hoverlink != 0 ? 'hvr' : ''}">Started <a class="{hoverlink == 2 ? 'hvr' : ''}" on:mouseover={handleMouseOver} on:mouseout={handleMouseOut}
              href="https://educt.ru"> Educt</a> with my folks</h2>
  <h2 class="{hoverlink != 0 ? 'hvr' : ''}">Graduated from ITMO&nbsp;University in 2021</h2>
  <h2 class="{hoverlink != 0 ? 'hvr' : ''}">First experience in startup with a good team</h2>
  <h2 class="{hoverlink != 0 ? 'hvr' : ''}">First part-time job at Hypefactory in 2019</h2>
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
  }

  h2 {
    font-size: 2rem;
    margin-bottom: 3rem;
    transition: color 0.3s;
  }

  .hvr {
    color: var(--hover);
    transition: color 0.3s;
  }

  a {
    color: var(--text-color);
    
  }
  a:hover {
    transition: color 0.3s;
    text-decoration: none;
  }

  @media (min-width: 640px) {
    .main {
      max-width: 768px;
    }
  }
</style>
