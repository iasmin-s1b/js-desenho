function setup() {
    createCanvas(400, 400);
    background("rgb(0,201,255)")
  }
  
  function draw() {
    stroke("purple");
    fill("pink");
    
    if(mouseIsPressed)  { 
      rect(mouseX, mouseY, 20, 45);
    }
  }