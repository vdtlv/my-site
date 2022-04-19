<script>
  import { fade, fly } from "svelte/transition";
  import Modal from './modal.svelte';
  import { useLazyImage as lazyImage } from 'svelte-lazy-image';

  let showModal = false;
</script>

<!-- <div
  class="main"
  style="height: calc(100% - 212px);"
  in:fly={{ y: 20, duration: 200, delay: 200 }}
  out:fade={{ duration: 200 }}
>
<h6> this page will be updated soon, but you still can
<a href="https://vdtlv.notion.site/6c50f368362342208872db178dfb696f">check my projects at notion</a>
</h6>
</div> -->

<div class="projectlist" in:fly={{ y: 20, duration: 200, delay: 200 }}
out:fade={{ duration: 200 }}>
<a href="https://vdtlv.notion.site/Educt-co-founder-1800b5fd8ead4e17a6f37a7b2470e69d" target="_blank" class="project" >
  <img src="Images/educt.png" data-src="Images/educt.png" alt="just educt logo" use:lazyImage={{ threshold: 0.5 }}>
  <h6>Educt</h6>
</a>

<a href="https://vdtlv.notion.site/Phase-10-student-project-5584573a3177445ba2b402a60f0d6f99" target="_blank" class="project" >
  <img src="Images/phase.png" data-src="Images/phase.png" alt="phase 10 with wired font" use:lazyImage={{ threshold: 0.5 }}>
  <h6 >Phase 10</h6>
</a>
  


  <a href="https://vdtlv.notion.site/ePost-Diploma-project-22b01964f80c424ca83e8d097d0ffdb6" target="_blank" class="project" >
    <img src="Images/epost.gif" data-src="Images/epost.gif" alt="cool animation representing main feature of epost" use:lazyImage={{ threshold: 0.5 }}>
    <h6 >ePost</h6>
  </a>

  <!-- svelte-ignore a11y-missing-attribute -->
  <a class="project" on:click="{() => showModal = true}">
    <img src="Images/rocketlaunch.gif" data-src="Images/rocketlaunch.gif" alt="rocket" use:lazyImage={{ threshold: 0.5 }}>
    <h6 >rocketlaunch.live</h6>
  </a>

  {#if showModal}
	<Modal on:close="{() => showModal = false}">
		<h2 slot="header">
			Page will be updated later, I&nbsp;promise
		</h2>
	</Modal>
{/if}


</div>

<style>
  img {
    max-width: 100%;
    max-height: 100%;
    margin-bottom: 8px;
    border-radius: 8px;
    transition: 0.2s;
  }

  .projectlist {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 0 16px;
  }

  .project {
    display: block;
    height: auto; 
    width: 30%; 
    /* background-color: rgb(103, 207, 103); */ 
    justify-content: center;
    align-items: center;
    margin: 0 16px 24px 16px;
    text-align: center;
  }
  .project:hover > img {
    transition: 0.28s;
    transform: scale(1.05);
    box-shadow: 0px -8px 24px #1b1b1b;
  }
  .project:hover > h6 {
    color: var(--text-color);
    transition: 0.28s;
  }
  /* 
      .main {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    color: #4d4d4d;
    margin: 0px 16px;
    height: -webkit-fill-available;
  }
  .projectlist::after {
    content: "";
    flex: auto;
  } */



  @media (max-width: 1008px) {
    .project { width: 45%; }
  }

  @media (max-width: 695px) {
    .project { 
      width: 100%;
      margin: 0 0 24px 0;
    }
    
  }
  
  h6 {
    margin: 8px 0px 0px;
    color: var(--default);
    font-size: 1.2em;
    font-weight: 600;
    display: inline-block;
    transition: 0.28s;
  }
  h6:hover {
    text-decoration: none;
    transition: 0.2s;
    cursor: pointer;
  }

  @media (min-width: 920px) {
    /*.main{
      align-items: center;
      text-align: center;
    }
    h6 {
      font-size: 5em;
    }*/
  }
  @media (min-width: 1395px) {
    /*.main{
      margin: auto;
      max-width: 80%;
    }
    h6 {
      font-size: 7em;
    }*/

  }
  @media (max-width: 320px) {
    /*h6 {
      margin: 0px;
      font-size: 2em;
    }*/
  }
</style>
