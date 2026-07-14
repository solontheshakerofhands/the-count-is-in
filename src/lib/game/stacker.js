
// src/lib/game/game.js
import Matter from 'matter-js';

// Keep track of your game instances if you need them later
let engine, render, ground;

export function initGame(canvas) {
    engine = Matter.Engine.create();
    render = Matter.Render.create({
        canvas: canvas,
        engine: engine,
        options: {
            width: canvas.clientWidth,
            height: canvas.clientHieght,
            wireframes: false
        }
    });

    // 3. Create your game objects/bodies
    const box = Matter.Bodies.rectangle(400, 200, 80, 80);
    ground = Matter.Bodies.rectangle(400, 610, 810, 60, { isStatic: true });

    // 4. Add them to the world and run
    Matter.Composite.add(engine.world, [box, ground]);
    
    Matter.Render.run(render);
    const runner = Matter.Runner.create();
    Matter.Runner.run(runner, engine);


    window.addEventListener('resize', handleResize);

    // Optional: Return a cleanup function
    return () => {
        Matter.Render.stop(render);
        Matter.Runner.stop(runner);
        Matter.Engine.clear(engine);
        render.canvas.remove();
    };
}


function handleResize() {
    const newWidth = window.clientWidth;
    const newHeight = window.clientHeight;
	
    // Update the canvas element size
    render.canvas.width = newWidth;
    render.canvas.height = newHeight;
	
    // Tell Matter.js the bounds have changed
    render.options.width = newWidth;
    render.options.height = newHeight;
    Matter.Render.setPixelRatio(render, window.devicePixelRatio);
   
    // OPTIONAL: If you have a floor/ground, you'll want to move it to the new center
    Matter.Body.setPosition(ground, { x: newWidth / 2, y: newHeight / 2 });
}


/*
  import { onMount, onDestroy } from 'svelte';
  // You will need to install matter-js: npm install matter-js
  import Matter from 'matter-js';

let canvasElement;
let score = $state(0);
let maxScore = $state(0);
let isGameOver = false;
	
// Game state tracking
let engine, render, runner;
let currentItemType = 'bar'; // 'bar' or 'coin'
let craneX = 400;
let craneDirection = 1;

const onMount(() => {
// 1. Initialize Matter.js Modules
    const { Engine, Render, Runner, Bodies, Composite, Events } = Matter;

    // Define the dimensions of the head base
    const headX = 400;
    const headY = 500;
    const width = 400;
    const height = 80;
    const precision = 20; // Number of points used to build the curved arc

    let headVertices = [];

    for (let i = 0; i <= precision; i++) {
	const t = (i / precision) * 2 - 1; 
	const x = t * (width / 2); 
	const y = - (1 - Math.pow(t, 2)) * (height / 4);
	headVertices.push({ x: x, y: y });
    }

    headVertices.push({ x: width / 2, y: height / 2 });
    headVertices.push({ x: -width / 2, y: height / 2 });

    const head = Bodies.fromVertices(headX, headY, headVertices, {
	isStatic: true,
	render: {
	    fillStyle: '#ffcc99',
	    strokeStyle: '#e0a080',
	    lineWidth: 2
	}
    });
    engine = Engine.create({ gravity: { y: 0.6 } });
    const world = engine.world;

    render = Render.create({
	canvas: canvasElement,
	engine: engine,
	options: {
	    width: 800,
	    height: 600,
	    wireframes: false,
	    background: '#1a1a1a'
	}
    });
    Render.run(render);

    runner = Runner.create();
    Runner.run(runner, engine);

    const ground = Bodies.rectangle(400, 595, 800, 10, { 
	isStatic: true, 
	isSensor: true, 
	render: { fillStyle: '#ff3333' } 
    });

    Composite.add(world, [head, ground]);

    const interval = setInterval(() => {
	if (isGameOver) return;
	craneX += 5 * craneDirection;
	if (craneX > 750 || craneX < 50) craneDirection *= -1;
    }, 16);

    Events.on(engine, 'collisionStart', (event) => {
	event.pairs.forEach(pair => {
	    if (pair.bodyA === ground || pair.bodyB === ground) {
		// isGameOver = true;
		if (score > maxScore) maxScore = score;
	    }
	});
    });

    // Cleanup on destroy
    return () => {
	clearInterval(interval);
	Render.stop(render);
	Runner.stop(runner);
	Engine.clear(engine);
    };
});

// Drop mechanism
function dropItem() {
    if (isGameOver) return;

    const { Bodies, Composite } = Matter;
    let newItem;

    if (currentItemType === 'bar') {
	// Gold bar: flatter, wider, high friction
	newItem = Bodies.trapezoid(craneX, 80, 200, 50, 0.3, { 
	    friction: 1,
	    restitution: 0.04,
	    slop: 0.05,
	    render: { fillStyle: '#ffd700' }
	});
	score += 10; // Bars are worth less
    } else {
	// Coin: taller than bar height (30px diameter vs 20px bar height), less friction
	newItem = Bodies.circle(craneX, 80, 15, { 
	    friction: 0.6, 
	    restitution: 0.2,
	    slop: 0.05,
	    render: { fillStyle: '#ff9900' }
	});
	score += 30; // Coins are worth more!
    }

    Composite.add(engine.world, newItem);

    // Randomize next item type
    currentItemType = Math.random() > 0.3 ? 'bar' : 'coin';
}

function resetGame() {
    // Simple page reload to reset the physics world, 
    // or you can programmatically clear the Composite.
    window.location.reload();
}
*/
