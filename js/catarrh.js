function Catarrh(x, y, r) {
  var options = {
    friction: 0.8,
    restitution: 0,
    angle: PI / 2,
    isSensor: true,
    isStatic: true,
    collisionFilter: {}
  }
  //CREATE the body
  this.body = Bodies.circle(x, y, r*2 - r/100, options);
  //create an internal variable for the radius
  this.r = r;
  World.add(world, this.body);

  //FUNCTIONS
  this.show = function() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    noStroke()
    fill(0, 255, 0, 180);
    translate(pos.x, pos.y);
    rotate(angle + PI );
    ellipse(0, 0, r*4+6);
    pop();
  }

}
