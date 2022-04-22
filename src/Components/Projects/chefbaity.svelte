<script>
  import tilt from '../../Utils/tilt.js';
  

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
		  <i>from March 2021</i><br>Chef Baity
    </div>
    <div class="item">
      Developed food deliver service. 
      <a href="https://vdtlv.notion.site/Food-delivery-service-Chef-Baity-e7252d8c95f74f4fadf4ab788e96eddf">Read more at Notion →</a>
	  </div>
</div>

<div data-tilt use:tilt={{ scale: 1.2 }} class="meme">

  <img src="Images/r2.png" width="150px" alt="test">
	<h3>ChefBaity</h3>
</div>

</main>




<style>

  .item > a {
    z-index: 0;
    display: block;
    background-color: none;
    border: none;
    border-radius: none;
    padding: 0;
    margin: 0;
    font-weight: 400;
    background-color: white;
    text-decoration: none;
    color: var(--text-color);
    text-align: left;
  }

  .item > a:hover {
    background-color: white;
    text-decoration: underline;
  }

  .meme{
    height: auto;
		width: auto;
    padding: 32px 64px;
    border-radius: 32px;
		background: linear-gradient(45deg, #ffd6d6, #fae3e3);
		color: white;
		
		display: grid;
		justify-content: center;
		align-content: center;
		text-align: center;

    transform-style: preserve-3d;
    
  }

  .meme > h3 {
    transform: translateZ(5px);
    box-shadow: #ffd6d6;
  }
  .meme > img {
    transform: translateZ(30px);
  }

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

</style>