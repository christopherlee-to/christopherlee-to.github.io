const { createRef } = require("react");

$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    // toggleGrid();
toggleGride();

    // TODO 2 - Create Platforms
    const platforms = [
{ id: 'A', x: 300, y: 650, width: 400, height: 20 },
{ id: 'B', x: 500, y: 600, width: 30, height: 60 },
{ id: 'C', x: 525, y: 520, width: 125, height: 30 },
{ id: 'D', x: 800, y: 600, width: 175, height: 25 },
    ];


    // TODO 3 - Create Collectables
const collectables = [
{ id: 'X', x: 450, y: 340, gravity: 0 },
{ id: 'Y', x: 1050, y: 510, gravity: 1.2, bounce: 1.2 },
{ id: 'Z', x: 875, y: 695, gravity: 1.3, bounce: 1.3 },
];


    
    // TODO 4 - Create Cannons
const cannons = [
{ id: 1, type: 'top', location: 730, delay: 1000 },
{ id: 2, type: 'right', location: 550, delay: 1250 },
{ id: 3, type: 'bottom', location: 560, delay: 600 },
];

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
