<script>
  import { onMount } from 'svelte';
  // Import the score store from our engine
  // import { initGame } from '$lib/game/stacker.js';

  let canvasElement;
  let score = $state(0);
  let maxScore = $state(0);
  let isGameOver = false;
  let cleanup;

  onMount(() => {
    // Call your external game code once the DOM is ready
    cleanup = initGame(canvasElement);
    return () => cleanup?.();
  });
</script> 

<main>
  <canvas bind:this={canvasElement} on:click={dropItem}></canvas>
</main>

<style>
  body, main {
    margin: 0;
    font-family: sans-serif;
    overflow-x: hidden;
    width: 100vw;
    height: 100vh;
  }
  canvas {
    width: 100%;
    height: 100%;
    display: block;
    box-shadow: 0 4px 20px rgba(0,0,0,0.3);
  }
</style>
