
<script>
  import { onMount } from 'svelte';
  // Import the score store from our engine
  import { initGame } from '$lib/game/stacker.js';

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
  :global(body, main) {
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
  .ui {
    position: absolute;
    top: 10px;
    left: 10px;
    color: white;
    font-family: sans-serif;
    pointer-events: none; /* Let clicks pass through to canvas */
  }
  .game-over {
    pointer-events: auto; /* Allow clicking the button */
    background: rgba(0,0,0,0.8);
    padding: 20px;
    border-radius: 8px;
    text-align: center;
    margin-top: 20px;
  }
  button {
    background: #ff9900;
    border: none;
    padding: 10px 20px;
    color: white;
    font-weight: bold;
    cursor: pointer;
    border-radius: 4px;
  }
  .crane {
    position: absolute;
    top: 40px;
    transform: translateX(-50%);
    color: white;
    font-family: sans-serif;
    font-weight: bold;
    pointer-events: none;
  }
  .bar { color: #ffd700; }
  .coin { color: #ff9900; }
</style>


