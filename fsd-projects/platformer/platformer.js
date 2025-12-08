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
    toggleGrid();




    // TODO 2 - Create Platforms


    createPlatform(300, 650, 50, 50, "red");
    createPlatform(500, 550, 50, 50, "blue");
    createPlatform(300, 420, 75, 25, "yellow");
    createPlatform(600, 300, 75, 10, "purple");
    createPlatform(800, 210, 25, 25, "orange");
    createPlatform(1100, 200, 25, 25, "black");



    // TODO 3 - Create Collectables
    createCollectable("steve", 900, 50);
    createCollectable("kennedi", 300, 600);
    createCollectable("diamond", 600, 200);




   
    // TODO 4 - Create Cannons
    createCannon("poition", 200, 100);
    createCannon("poition", x, y);
    createCannon("poition", x, y);


   
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }


  registerSetup(setup);
});
