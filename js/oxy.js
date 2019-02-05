function Oxy(x, y, r) {
  var options = {
    friction: 0.2,
    restitution: 0.8,
    frictionAir: 0.01,
    collisionFilter: {}
    }
  //CREATE the body
  this.body = Bodies.circle(x, y, r*2, options);
  //create an internal variable for the radius
  this.r = r;

  //adding the body to the world
  World.add(world, this.body);

  //FUNCTIONS
    //check if is in the screen, than it removes it if it's out
  this.isOffScreen = function() {
    var pos = this.body.position;
    return (pos.y > height + wH/75);
    }
    //render in p5 the object
  this.show = function() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    stroke(0)
    strokeWeight(2.5)
    fill(0,0,255)
    translate(pos.x, pos.y);
    rotate(angle + PI );
    ellipse(0, 0, r*4);
    //exagon code
    // rotate(angle + PI/6);
    // polygon(0, 0, this.r*2, 6);
    pop();
  }
    //function for creating regulars polygons
  // function polygon(x, y, radius, npoints) {
  //   var angle = TWO_PI / npoints;
  //   beginShape();
  //   for (var a = 0; a < TWO_PI; a += angle) {
  //     var sx = x + cos(a) * radius;
  //     var sy = y + sin(a) * radius;
  //     vertex(sx, sy);
  //   }
  //   endShape(CLOSE);
  // }
}
