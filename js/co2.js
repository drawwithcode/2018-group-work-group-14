function Co2(x, y, r) {
  var options = {
    friction: 0.2,
    restitution: 0.8,
    frictionAir: 0.03,
    collisionFilter: {}
    }
  var n = 6;
  this.body = Bodies.polygon(x, y, n, r*2, options);
  this.r = r;

  World.add(world, this.body);

  //check if is in the screen, than it removes it if it's out
this.isOffScreen = function() {
  var pos = this.body.position;
  return (pos.y > height + wH/20);
  }

  this.show = function() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    stroke(0);
    strokeWeight(2.5);
    fill(255,0,0);
    translate(pos.x, pos.y);
    rotate(angle + PI/n );
    polygon(0, 0, this.r*2, n);
    pop();
  }

  function polygon(x, y, radius, npoints) {
    var angle = TWO_PI / npoints;
    beginShape();
    for (var a = 0; a < TWO_PI; a += angle) {
      var sx = x + cos(a) * radius;
      var sy = y + sin(a) * radius;
      vertex(sx, sy);
    }
    endShape(CLOSE);
  }
}
