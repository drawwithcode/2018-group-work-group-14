function LungB(x, y, w, h) {
  var options = {
    friction: 0.2,
    restitution: 0.2,
    angle: 0,
    isStatic: true,
    collisionFilter: {}

  }
  this.body = Bodies.rectangle(x, y, w, h, options);
  this.w = w;
  this.h = h;
  World.add(world, this.body);

  this.show = function() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    noStroke();
    fill(255,10,10, 80);
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    rect(0, 0, this.w, this.h);
    pop();
  }

}
