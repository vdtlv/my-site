<script>
	import Modal from './modal.svelte';

	let showModal = false;
</script>

<a href="/#/projects"> back</a>
<button on:click="{() => showModal = true}">
	show modal
</button>

{#if showModal}
	<Modal on:close="{() => showModal = false}">
		<h2 slot="header">
			Page will be updated later, I&nbsp;promise
		</h2>
	</Modal>
{/if}