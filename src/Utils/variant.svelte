<script>
	import { createEventDispatcher, onDestroy } from 'svelte';
	import { fade, fly } from "svelte/transition";

	export let link;
    export let text;

	const dispatch = createEventDispatcher();
	const close = () => dispatch('close');

	let modal;

	const handle_keydown = e => {
		if (e.key === 'Escape') {
			close();
			return;
		}
	};

	const previously_focused = typeof document !== 'undefined' && document.activeElement;

	if (previously_focused) {
		onDestroy(() => {
			previously_focused.focus();
		});
	}
</script>

<svelte:window on:keydown={handle_keydown}/>

<div class="modal-background" on:click={close} in:fade={{ y: 20, duration: 100 }}
out:fade={{ duration: 200, delay: 100 }} ></div>

<div class="modal" role="dialog" aria-modal="true" bind:this={modal} in:fly={{ y: 100, duration: 200, delay: 100 }}
out:fly={{y: 100, duration: 200 }}>
	<slot name="header"></slot>

	<div class="pip">
	<a href="{link}">{text}</a>
	<!-- svelte-ignore a11y-autofocus -->
	<button on:click={close}>Cancel</button>
</div>
</div>

<style>
	.modal-background {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		background: rgba(0,0,0,0.3);
	}

	.modal {
		display: flex;
		flex-direction: column;
		justify-content: left;
		align-items: left;
		padding: 16px;
		overflow: hidden;
		position: fixed;
		bottom: 0;
		left: 0;
		width: calc(100vw - 32px);
		height: min-content;
		border-radius: 32px 32px 0 0;
		background: white;
		text-align: left;
	}

	.pip {
		display: flex;
		flex-direction: row;
		gap: 16px;
	}

	button {
    display: block;
	width: fit-content;
    background-color: #f2f2f2;
    border: none;
    border-radius: 4px;
    padding: 14px 16px;
    margin: 8px 0px;
    font-weight: bold;
    font-size: 1em;
    color: #222;
    transition: background-color 0.3s;
    text-align: center;
  }
  button:hover{
      text-decoration: none;
      background-color: #e9e9e9;
      transition: background-color 0.3s;
    }

	a {
    background-color: #222;
    border: none;
    border-radius: 4px;
    padding: 14px 16px;
    margin: 8px 0px;
    font-weight: bold;
    font-size: 1em;
    color: white;
    transition: background-color 0.3s;
    text-align: center;
  }
  a:hover{
      text-decoration: none;
      background-color: #333333;
      transition: background-color 0.3s;
    }

	@media (max-width: 600px) {
		button {width: 100%;}
		a {width: calc(100%-32px);}
		.pip {
		display: flex;
		flex-direction: column;
		gap: 0px;
	}
	}
</style>