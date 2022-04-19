<script>
	import { fade, fly } from "svelte/transition";
	let y;
	$: x = y;
	$: innerWidth = 0
</script>

<svelte:window bind:scrollY={y} bind:innerWidth/>


<a href="/#/projects" class="auf {y ? 'x' : ''}"> ← Back to all projects</a>
<main in:fly={{ y: 100, duration: 100, delay: 300 }}
out:fade={{ duration: 200 }}> 

<div class="container">
    <div class="item title">
		<i>from April 2020 </i><br>rocketlanch.live<br></div>
    <div class="item">Redesing of webpage for&nbsp;rocket launch tracker.
	</div>
</div>

<img class:y src="Images/1.png" data-src="Images/1.png" alt="mockup">

{#if innerWidth < 930}
<a href="/#/projects"> ← Back to all projects</a>
{/if}
</main>



<style>

i{
	font-style: normal;
	font-weight: normal;
	font-size: 0.8em;
	color: var(--default);
}
.container {
    height: 180px;
	width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: baseline;
    align-content: center;
  }
  .item {
	align-self: center;
	font-size: 1.1em;
    line-height: 1.6em;
  }
  .title {
    width: 50%;
	color: var(--text-color);
    font-weight: bold;
  }

	img{
		width: 100%;
		height: 100%;
		border-radius: 16px;
		box-shadow: 0px 0px 56px 16px rgba(0, 0, 0, 0.05);
		transition: 0.7s;
		margin-bottom: 500px;
	}

	.auf {
		position: fixed;
		top: 16px;
		left: 16px;
	}
	a {
	z-index: 100;
    display: block;
    background-color: var(--hover);
	max-height: fit-content;
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
  a:hover{
      text-decoration: none;
      background-color: #e9e9e9;
      transition: background-color 0.3s;
    }
  
  main {
    padding: 0px 1em;
    margin: 0 auto;
	max-width: 800px;
    display: flex;
    flex-direction: column;
    align-items: center;
	padding-bottom: 32px;
  }

  @media (min-width: 930px) {
	.y{
		box-shadow: 0px 0px 72px 16px rgba(0, 0, 0, 0.15);
		transition: 0.7s;
    	transform: scale(1.2) translate(0, 150px);
	}
  }

  @media (max-width: 930px) {
    a { 
      width: fit-content;
    }
    main {
      max-width: 100%;
    }
	.container {
	height: fit-content;
    margin: 30px 0;
    display: flex;
    flex-direction: column;
    align-items: baseline;
    align-content: left;
  }
  img {
	margin-bottom: 20px;
  }
  .item {
	width: 100%;
  }
  .title {
    width: 100%;
  }
  .auf {
		position: fixed;
		left: calc(50% - 100px);
		top: auto;
		bottom: 16px;
		transition: 0.7s;
	}
	.x{
    	transform: translate(0px, 100px);
		transition: 0.7s;
	}

  }

  @media (max-width: 700px) {
	  img {
		width: 100vw;
		border-radius: 8px 8px 0 0;
	  }
  }
</style>