<script>
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	let darkMode = false;
	let darkModeReady = false;

	onMount(() => {
		darkMode = document.documentElement.classList.contains('dark');
		document.body.classList.add('transition', 'ease-in-out', 'duration-500');
		darkModeReady = true;
	});
</script>

{#if darkModeReady}
	<div class="h-6 toggle" in:fade={{ duration: 800 }}>
		<input
			type="checkbox"
			id="toggle"
			bind:checked={darkMode}
			on:change={() => document.documentElement.classList.toggle('dark')} />
		<label id="darkicon" title="Toggle dark mode" for="toggle" data-dark={darkMode ? '🌙' : '🌞'} />
	</div>
{/if}

<!-- bg-gray-500 -->

<style style lang="postcss">
	.toggle input[type='checkbox'] {
		display: none;
	}

	.toggle label {
		@apply inline-block cursor-pointer relative transition-all ease-in-out 
		duration-300 w-12 h-6 rounded-3xl 
		border border-solid 
		border-blue-700 bg-yellow-100;
	}

	.toggle label::after {
		content: attr(data-dark);
		@apply flex items-center justify-center rounded-full cursor-pointer absolute top-px left-px transition-all ease-in-out duration-300 w-5 h-5 bg-transparent align-middle;
	}

	.toggle input[type='checkbox']:checked ~ label {
		@apply bg-gray-800;
	}

	.toggle input[type='checkbox']:checked ~ label::after {
		transform: translateX(24px);
	}
</style>
