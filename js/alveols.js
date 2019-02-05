function Alveol(x, y, r) {
  var options = {
    friction: 0,
    restitution: 1,
    angle: PI / 2,
    isStatic: true,
    collisionFilter: {}

  }
  var n = 3;
  this.body = Bodies.polygon(x, y, n, r*2, options);
  this.r = r;

  World.add(world, this.body);

  this.show = function() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    noStroke()
    fill(255,10,10, 80);
    translate(pos.x, pos.y);
    rotate(angle + PI );
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
