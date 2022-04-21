<script>
    import Modal from '../Utils/modal.svelte';
    import Variant from '../Utils/variant.svelte';
    let showModal = false;
    let showVariant = false;

    export let title;
    export let imgLink;
    export let altText;
    export let link;
    export let teaser;
</script>

{#if teaser}
    <!-- svelte-ignore a11y-missing-attribute -->
    {#if teaser == 2}
    <a on:click={() => showVariant = true}>
        <img src={imgLink} data-src={imgLink} alt={altText} >
        <h6 >{title}</h6>
    </a> 
    {:else}
    <a on:click={() => showModal = true}>
      <img src={imgLink} data-src={imgLink} alt={altText} >
      <h6 >{title}</h6>
  </a>
    {/if}
{:else}
    <a href={link}>
        <img src={imgLink} data-src={imgLink} alt={altText} >
        <h6 >{title}</h6>
    </a> 
{/if}


{#if showModal}
	<Modal on:close="{() => showModal = false}">
		<h2 slot="header" >
			Page will be updated later
		</h2>
	</Modal>
{/if}

{#if showVariant}
	<Variant on:close="{() => showVariant = false}" text={"Go to Notion page"} link={link}>
    <div slot="header">
		<h2>
			Page will be updated soon
		</h2>
    <p>
      Find out more about {title} in my Notion. Some notes, reneders, images and Figma files.
    </p>
  </div>
	</Variant>
{/if}


<style>

    
      img {
        -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  user-select: none;
    max-width: 100%;
    max-height: 100%;
    margin-bottom: 8px;
    border-radius: 8px;
    transition: 0.2s;
  }

    a {
    display: block;
    height: auto; 
    width: 30%; 
    /* background-color: rgb(103, 207, 103); */ 
    justify-content: center;
    align-items: center;
    margin: 0 16px 24px 16px;
    text-align: center;
  }
  a:hover > img {
    transition: 0.28s;
    transform: scale(1.05);
    box-shadow: 0px -8px 24px #1b1b1b;
  }
  a:hover > h6 {
    color: var(--text-color);
    transition: 0.28s;
  }



  @media (max-width: 1008px) {
    a { width: 45%; }
  }

  @media (max-width: 695px) {
    a { 
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

</style>