function canvasApp() {

  if (!canvasSupport()) {
    return;
  } else {
    var theCanvas = document.getElementById("canvasOne");
    var context = theCanvas.getContext("2d");
  }

  //Create a stage by getting a reference to the canvas
  var stage = new createjs.Stage("canvasOne");
  //Create a Shape DisplayObject.
  var circle = new createjs.Shape();
  circle.graphics.beginFill("red").drawCircle(0, 0, 40);
  //Set position of Shape instance.
  circle.x = circle.y = 50;

  circle.addEventListener("click", function(e) {
    console.log("click");
  });

  //Add Shape instance to stage display list.
  stage.addChild(circle);
  //Update stage will render next frame
  stage.update();

  createjs.Ticker.addEventListener("tick", function(e) {
    //Circle will move 10 units to the right.
    circle.x += 10;
    //Will cause the circle to wrap back
    if (circle.x > stage.canvas.width) { circle.x = 0; }
    stage.update();
  });

}

