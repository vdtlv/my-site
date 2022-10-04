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
		  <i>Sep 2021 – Sep 2022</i><br>Right on Trek
    </div>
      <img class="logo" src="Images/rotlogo.svg" alt="RoT logo">
</div>
  <div class="item">
    At&nbsp;Right on&nbsp;Trek I&nbsp;wanted to&nbsp;provide a&nbsp;comfortable and accessible user experience for new hikers and 
    lifelong mountaineers to&nbsp;make their outdoor adventures as&nbsp;epic as&nbsp;possible. I&nbsp;was working on&nbsp;various 
    parts of&nbsp;the service from authorization to&nbsp;the gear rental system. Developed CJM and user flows to&nbsp;turn RoT into 
    a&nbsp;subscription-only platform smoothly.
    <br>
    <br>
    <!-- Here is a couple of cases I want to show: checkout update, PDP standardization   -->  
    I have only one of the cases below for now. Others will be added later.
    </div>
</div>

<IntersectionObserver let:intersecting top={((innerWidth > 930) ? "-40" : "-10")} bottom={((innerWidth > 930) ? "-40" : "-10")}>
  <img class="{intersecting ? 'y' : 'n'}" src="Images/rot-checkut.jpg" data-src="Images/rot-checkut.jpg" alt="Right on Trek upted checout">
  </IntersectionObserver>

<div class="main">
  <h2>Checkout update</h2>
  <div class="twocol">
    <div class="col">
      <h3>Problem</h3>
      <p> We&nbsp;got a&nbsp;big amount of&nbsp;abandoned carts. Depending on&nbsp;UX research 
        results&nbsp;I found out that there are two main reasons: too many non-obvious steps during 
        checkout and hard forms without presaved information for authorized users.</p> 
    </div>
    <div class="col">
      <h3>Goal</h3>
      <p> Decrease the number of&nbsp;abandoned carts in&nbsp;relation to&nbsp;paid orders. 
        Increase the number of&nbsp;orders through the website.</p> 
    </div>
  </div>
  <br>
  <h3>Execution Checklist</h3>
  <div class="twocol">
    <div class="col">
      <p> <b style="color: green; font-size:24px;">✓</b><br><br> Find out the needs and pains of&nbsp;users and determine the tasks to&nbsp;achieve results by&nbsp;changing metrics together with the project manager. </p> 
    </div>
    <div class="col">
      <p> <b style="color: green; font-size:24px;">✓</b><br><br> Explore the best options for implementing the payment process, study the existing customer journey, prepare hypotheses and present them to&nbsp;the team.</p> 
    </div>
    <div class="col">
      <p> <b style="color: green; font-size:24px;">✓</b><br><br> Prepare prototypes for testing hypotheses, test and make changes based on&nbsp;test results.</p> 
    </div>
  </div>
  <br>
  <h3>Results</h3>
  <p>The calendar turned into the new component with options for year/month selector, become more 
    convenient for users of&nbsp;mobile devices. Updated product card for cart, now they are more informative. 
    New option buttons added to&nbsp;the design system.</p>
</div>
  <!-- <a tabrget="_blank" href="Https://chefbaity.ru">Visit website →</a> -->
  <IntersectionObserver let:intersecting top={((innerWidth > 930) ? "-40" : "-10")} bottom={((innerWidth > 930) ? "-40" : "-10")}>
    <img class="{intersecting ? 'y' : 'n'}" src="Images/rot-components.jpg" data-src="Images/rot-components.jpg" alt="Right on Trek components">
  </IntersectionObserver>

  <div class="main">
      <p>In&nbsp;the course of&nbsp;work, several checkout layouts were prepared and the user 
        path was redesigned to&nbsp;achieve better performance in&nbsp;usability tests. The final 
        result (for a&nbsp;certain audience of&nbsp;users) has become better compared to&nbsp;the 
        implemented one:</p>
  </div>
        <table>
          <tr>
            <th></th>
            <td>Old Checkout</td>
            <td>Updated Checkout</td>
            <td>Result</td>
          </tr>
          <tr>
            <td>Success</td>
            <th>58.5%</th>
            <th>84.2%</th>
            <th>+25.7%</th>
          </tr>
          <tr>
            <td>Error</td>
            <th>36.4%</th>
            <th>8.9%</th>
            <th>-27.5%</th>
          </tr>
          <tr>
            <td>Mean time</td>
            <th>1:34 min</th>
            <th>0:20 min</th>
            <th>≈ 1 min faster</th>
          </tr>
          <tr>
            <td>Misclicks</td>
            <th>20%</th>
            <th>6%</th>
            <th>-14%</th>
          </tr>
        </table>
<div class="main">
      <p style="font-style: italic; color:grey">
        The data is the result of testing with the Marvel app (3 weeks). It looks great, but the 
        results of Google Analytics (1 month after implementation) came out a little different: 
        the number of orders increased, but the number of abandoned carts did not change. After 
        reviewing the problem, I found out that the most of the carts are left by users who do not 
        want to create an account for the purchase. The service is turning into membership only platform 
        so it is iportant to inform users about this or make a guest checkout. 
      </p>
  </div>

    <IntersectionObserver let:intersecting top={((innerWidth > 930) ? "-40" : "-10")} bottom={((innerWidth > 930) ? "-40" : "-10")}>
      <img class="{intersecting ? 'y' : 'n'}" src="Images/rot-layouts.jpg" data-src="Images/rot-layouts.jpg" alt="Chef Baity Application">
    </IntersectionObserver>
    <IntersectionObserver let:intersecting top={((innerWidth > 930) ? "-40" : "-10")} bottom={((innerWidth > 930) ? "-40" : "-10")}>
      <img class="{intersecting ? 'y' : 'n'}" src="Images/rot-flows.jpg" data-src="Images/rot-flows.jpg" alt="Chef Baity Application">
    </IntersectionObserver>
    <IntersectionObserver let:intersecting top={((innerWidth > 930) ? "-40" : "-10")} bottom={((innerWidth > 930) ? "-40" : "-10")}>
      <img class="{intersecting ? 'y' : 'n'}" src="Images/rot-proto.jpg" data-src="Images/rot-proto.jpg" alt="Chef Baity Application">
    </IntersectionObserver>
  <div class="main">
    <!--<p>Wow, seems this page is in progerss</p>-->
    {#if innerWidth < 930}
      <a class="a" style="margin-bottom: 40px;" href="/#/projects"> ← Back to all projects</a>
    {/if}
  </div>
</main>




<style>
  table {
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    border-spacing: 4px;
    overflow-x: scroll;
    border-collapse: separate;
    border-radius: 10px;
    display: block;
    overflow-x: auto;
    white-space: nowrap;
}

td, th {
  width: 180px;
  background-color: var(--hover);
  border-radius: 10px;
  padding: 0.5rem;
  text-align: right;
}

td:first-child {
  text-align: left;
}

th:last-child {
  color: green;
}

tr:first-child th:first-child {
  background-color: white;
}
  .logo{
    height: 57px;
    width: 288px;
    margin-bottom: 0;
    box-shadow: none !important; 
  }

  .col > p {
    margin-bottom: 0;
  }
  

  h3 {
    margin-block-end: 0;
  }

  img {
    width: 100%;
    align-self: center;
    margin-bottom: 20px;
    border-radius: 8px;
    max-width: 1400px;
    box-shadow: 0 4px 32px rgb(0 0 0 / 0.1);
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
    justify-content: space-between;
    align-items: center;
    align-content: center;
  }
  .item {
	align-self: center;
	font-size: 1.1em;
  line-height: 1.6em;
  padding-bottom: 32px;
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
	  /*padding-bottom: 32px;*/
	  max-width: 800px;
  }


  .twocol {
    display: flex;
    flex-direction: row;
    gap: 24px;
  }

  .col {
    width: 50%;
  }


  @media (max-width: 930px) {
    table {
      width: 100%;
    }
    h2{
    font-size: 24px;
    margin-bottom: 0;
  }
  .item {
  	font-size: 1em;
    line-height: 1.5em;
  }
  .twocol {
    flex-direction: column;
  }
  .col{
    width: fit-content;
  }

    .auf { 
      width: fit-content;
    }
    main {
      padding: 0 16px;
      max-width: 100vw;
      display: flex;
      flex-direction: column;
    }
    img {
    width: 100%;
    align-self: center;
    margin-bottom:5%;
  }

  .logo{
    margin-bottom: 32px;
    height: 50px;
    width: 250px;
  }
	.container {
	  height: fit-content;
    margin: 30px 0;
    display: flex;
    flex-direction: column-reverse;
    justify-content: flex-start;
    align-content: flex-start;
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