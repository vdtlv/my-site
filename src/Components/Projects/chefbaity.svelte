<script>
  //import tilt from '../../Utils/tilt.js';
  import IntersectionObserver from '../../Utils/intersectionobserver.svelte';
  

	import { fade, fly } from "svelte/transition";
	let y;
	$: x = y;
	$: innerWidth = 0
  let reverse = false;
  //let tp = document.getElementById('kk').getBoundingClientRect().top
</script>

<svelte:window bind:scrollY={y} bind:innerWidth/>


<a href="/#/projects" class="auf {y ? 'x' : ''}"> ← Back to all projects</a>

<main in:fly={{ y: 100, duration: 100, delay: 300 }}
out:fade={{ duration: 200 }}> 

<div class="main"> 
  <div class="container">
    <div class="item title">
		  <i>from March 2021</i><br>Chef Baity
    </div>
    <div class="item">
      My first job as a designer and developed (a little bit) at&nbsp;food deliver service.
	  </div>
  </div>
	<h2>Branding, website and&nbsp;application</h2>
  <p>Chef Baity is a foodtech startup, the main idea is to provide prepared ingrdients to make cooking as simple as possible. Also, developed website and application layout.</p> 
  <a tabrget="_blank" href="Https://chefbaity.ru">Visit website →</a>
</div>
  <IntersectionObserver let:intersecting top={((innerWidth > 930) ? "-40" : "-10")} bottom={((innerWidth > 930) ? "-40" : "-10")}>
  <img class="{intersecting ? 'y' : 'n'}" src="Images/cb-brandbook.png" data-src="Images/cb-brandbook.png" alt="Chef Baity Brandbook">
  </IntersectionObserver>
  <IntersectionObserver let:intersecting top={((innerWidth > 930) ? "-40" : "-10")} bottom={((innerWidth > 930) ? "-40" : "-10")}>
  <img class="{intersecting ? 'y' : 'n'}" src="Images/cb-printedmaterials.png" data-src="Images/cb-printedmaterials.png" alt="Chef Baity Printed Materials">
  </IntersectionObserver>
  <IntersectionObserver let:intersecting top={((innerWidth > 930) ? "-40" : "-10")} bottom={((innerWidth > 930) ? "-40" : "-10")}>
    <img class="{intersecting ? 'y' : 'n'}" src="Images/cb-presentations.jpg" data-src="Images/cb-presentations.jpg" alt="Chef Baity presentations">
    </IntersectionObserver>
  <IntersectionObserver let:intersecting top={((innerWidth > 930) ? "-40" : "-10")} bottom={((innerWidth > 930) ? "-40" : "-10")}>
    <img class="{intersecting ? 'y' : 'n'} gradient" src="Images/cb-labels-d.jpg" data-src="Images/cb-labels-d.jpg" alt="Chef Baity Labels">
  </IntersectionObserver>
  <IntersectionObserver let:intersecting top={((innerWidth > 930) ? "-40" : "-10")} bottom={((innerWidth > 930) ? "-40" : "-10")}>
    <img class="{intersecting ? 'y' : 'n'}" src="Images/cb-web.png" data-src="Images/cb-web.png" alt="Chef Baity Website">
    </IntersectionObserver>
    <IntersectionObserver let:intersecting top={((innerWidth > 930) ? "-40" : "-10")} bottom={((innerWidth > 930) ? "-40" : "-10")}>
      <img class="{intersecting ? 'y' : 'n'}" src="Images/cb-app.png" data-src="Images/cb-app.png" alt="Chef Baity Application">
    </IntersectionObserver>
  <div class="main">
    <!--<p>Wow, seems this page is in progerss</p>-->
    {#if innerWidth < 930}
      <a class="a" style="margin-bottom: 40px;" href="/#/projects"> ← Back to all projects</a>
    {/if}
  </div>
</main>




<style>

  img {
    width: 100%;
    align-self: center;
    margin-bottom: 20px;
    border-radius: 8px;
    max-width: 1400px;

  }

  .y {
    scale: 1;
    opacity: 1;
    transition: 1s ease-out;
  }


  .n {
    scale: 0.9;
    opacity: 0.3;
    transition: 1s ease-in;
  }

  .gradient {
    -webkit-mask-image: linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0));
  }

  h2{
    font-size: 32px;
  }
  a {
    color: var(--text-color);
    font-weight:700;
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

  .a{
    background-color: var(--hover);
	  max-height: fit-content;
    width: auto;
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

  .auf:hover{
      text-decoration: none;
      background-color: #e9e9e9;
      transition: background-color 0.3s;
    }
  
  main{
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
	  padding-bottom: 32px;
    overflow-y: hidden;
  }
  .main {

    margin: 0 auto;
    display: flex;
    flex-direction: column;
	  padding-bottom: 32px;
	  max-width: 800px;
    padding-bottom: 32px;
  }


  @media (max-width: 930px) {
    .auf { 
      width: fit-content;
    }
    main {
      padding: 0 1em;
      max-width: 100vw;
      display: flex;
      flex-direction: column;
    }
    img {
    margin-left: -16px;
    width: 100vw;
    align-self: center;
    margin-bottom:5%;
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

  .a{
    align-self: center;
  }
  }

</style>