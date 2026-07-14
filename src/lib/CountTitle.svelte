<div class="count-title">
    <div class="morphed-title">
    <h1 class="title1">The Count</h1>
    <h1 class="title2">Is In</h1>

    </div>

    <svg style="position: absolute; width: 0; height: 0;" xmlns="http://www.w3.org/2000/svg">
      <filter id="blobby-background">
	<feMorphology operator="dilate" radius="10" in="SourceAlpha" result="dilated" />
	<feGaussianBlur stdDeviation="3" in="dilated" result="blurred" />
	<feComponentTransfer in="blurred" result="smooth-background">
	  <feFuncA type="linear" slope="20" /> 
	</feComponentTransfer>
	<feFlood flood-color="#f4f4f4" result="color" />
	<feComposite in="color" in2="smooth-background" operator="in" result="final-background" />
	<feMerge>
	  <feMergeNode in="final-background" />
	  <feMergeNode in="SourceGraphic" />
	</feMerge>
      </filter>
    </svg>
</div>

<style>
  .morphed-title {
    font-family: "Matemasie", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 6rem;
    letter-spacing: 2px;
    color: #325eab;
    -webkit-text-stroke: 6px #1f3e74;
    filter: url(#blobby-background);
    padding: 20px; 
    display: inline-block;
    line-height: 0.85;
  }

  h1 {
    text-align: center;
    letter-spacing: 4px;
    font-family: "Matemasie", sans-serif;
    font-weight: 400;
    font-style: normal;
    margin: 0;
  }

  .title1 {
    font-size: 8rem;
  }

  .title2 {
    font-size: 10rem;
  }
</style>
