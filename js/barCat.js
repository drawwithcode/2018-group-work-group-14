function BarCat(x, y, w, h) {
  var options = {
    friction: 0.2,
    restitution: 0.2,
    angle: 0,
    isStatic: true,
    isSensor: true,
    collisionFilter: {}
  }
  this.body = Bodies.rectangle(x, y, w, h, options);
  this.w = w;
  this.h = h;

  this.show = function() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    noStroke();
    fill(0,255,0,180);
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    rect(0, 0, this.w, this.h);
    pop();
  }

}










// beginShape();
// vertex(wW/14, wH/10 + totH);
// vertex(wW/14*2, wH/10 + totH);
// vertex(wW/14*3, wH/10 + totH);
// vertex(wW/14*4, wH/10 + totH);
// vertex(wW/14*5, wH/10 + totH);
// vertex(wW/14*6, wH/10 + totH);
// vertex(wW/14*7, wH/10 + totH);
// vertex(wW/14*8, wH/10 + totH);
// vertex(wW/14*9, wH/10 + totH);
// vertex(wW/14*10, wH/10 + totH);
// vertex(wW/14*11, wH/10 + totH);
// vertex(wW/14*12, wH/10 + totH);
// vertex(wW/14*13, wH/10 + totH);
// vertex(wW/14*14, wH/10 + totH);
// vertex(wW/14*14, wH/10 - totH);
// vertex(wW/14*13, wH/10 - totH);
// vertex(wW/14*12, wH/10 - totH);
// vertex(wW/14*11, wH/10 - totH);
// vertex(wW/14*10, wH/10 - totH);
// vertex(wW/14*9, wH/10 - totH);
// vertex(wW/14*8, wH/10 - totH);
// vertex(wW/14*7, wH/10 - totH);
// vertex(wW/14*6, wH/10 - totH);
// vertex(wW/14*5, wH/10 - totH);
// vertex(wW/14*4, wH/10 - totH);
// vertex(wW/14*3, wH/10 - totH);
// vertex(wW/14*2, wH/10 - totH);
// vertex(wW/14, wH/10 - totH);
// endShape();
