

<script>
  import CountTitle from '$lib/CountTitle.svelte';

  let scrollY = $state(0);
  
  const speeds = {
    sky: 0,
    title: -0.5,
    count: 0.2,
    pier: 1.4,
    beach: 1.8
  };

  let skyTransform = $derived(`translateY(${-scrollY * speeds.sky}px)`);
  let titleTransform = $derived(`translateY(${-scrollY * speeds.title}px)`);
  let countTransform = $derived(`translateY(${-scrollY * speeds.count}px)`);
  let pierTransform = $derived(`translateY(${-scrollY * speeds.pier}px)`);
  let beachTransform = $derived(`translateY(${-scrollY * speeds.beach}px)`);
</script>

<svelte:window bind:scrollY={scrollY} />

<div class="parallax-container">
  
  <div class="layer title" style:transform={titleTransform}>
      <CountTitle />
  </div>
  
  <div class="layer count" style:transform={countTransform}>
    <img src="/the_count.webp" alt="The count"/>
  </div>

  <div class="layer pier" style:transform={pierTransform}>
    <a href="/stacker" class="pier-sign" data-sveltekit-preload-data="off">
      <img src="/pier_sign.webp" alt="pier scene"/>
    </a>
    <img src="/pier_scene.webp" alt="pier scene"/>
  </div>

  <div class="layer beach" style:transform={beachTransform}>
    <img src="/beach_scene.webp" alt="beach scene"/>
  </div>
</div>

<style>
  .parallax-container {
    position: relative;
    height: 170vh;
    width: 100%;
    overflow: hidden;
    background-image: url('/background.webp');
  }

  .layer {
    position: absolute;
    left: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    will-change: transform;
  }

  .title {
    top: 0;
    z-index: 2;
    text-align: center;
  }
  
  .count {
    z-index: 3;
    justify-content: flex-start;
    top: 70vh;
  }

  .pier {
    z-index: 4;
    justify-content: flex-start;
    top: 164vh;
    position: relative;
  }

  .pier-sign {
    position: absolute;
    top: 47.8vh;
    left: 50vw;
    transform: translateX(-46%);
    box-shadow: inset 14em 1em #f2cb77, 0 0 10px 5px #f2cb77;
    display: block; 
    text-decoration: none;
  }

  .beach {
    z-index: 5;
    justify-content: flex-start;
    top: 266vh;
  }
</style>
