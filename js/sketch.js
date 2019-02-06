var Engine = Matter.Engine,
//  Render = Matter.Render,
    World = Matter.World,
    Events = Matter.Events,
    Composite = Matter.Composite,
    Composites = Matter.Composites,
    Body = Matter.Body,
    Bodies = Matter.Bodies;
// setup MATTER.js
var engine;
var world;
//category
var  boundsCat= 0x0001;
var  particlesCat= 0x0002;
var  oxyCat= 0x0003;
var  co2Cat= 0x0004;
var  catCat= 0x0005;
//objects
var barCat0;
var barCat1;
var barCat2;
var barCat3;
var barCat0Body;
var barCat1Body;
var barCat2Body;
var barCat3Body;
var added1 = false;
var added2 = false;
var added3 = false;
var totH = 0;
var oxys = [];
var bloodTox = 0;
var bloodCat = 0;
var co2s = [];
var catarrhs = [];
var lungsB = [];
var alveols = [];
var timer = 0;
var bloodOxy = 200;
var heart = 0;
var myTimer = setInterval(updateTimer, 1000);
var myHeart = setInterval(updateHeart, 1);
var isTouched = false;

// gravity
var valG = 0.4;
var g= valG;
// canvas
var wW;
var wH;
var bg;

function preload() {
  pressura = loadFont('../font/GTPressuraProMono-Regular.otf');
  bg = loadImage('../imgs/BG.png')
}
function setup() {
  //Canvas setup
  wW = windowWidth;
  wH = windowHeight;
  createCanvas(wW,wH);
  setShakeThreshold(30);
  //Engine setup
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

    // Events
    Events.on(engine, 'collisionStart', function(event) {
          var pairs = event.pairs;

          for (var i = 0; i < pairs.length; i++) {
              var pair = pairs[i];
              if(pair.bodyA === barCat0Body) {
                pair.bodyB.frictionAir = 0.5;
              } else if (pair.bodyB === barCat0Body) {
                pair.bodyA.frictionAir = 0.5;
              }
              var pair = pairs[i];
              if(pair.bodyA === barCat1Body) {
                pair.bodyB.frictionAir = 0.5;
              } else if (pair.bodyB === barCat1Body) {
                pair.bodyA.frictionAir = 0.5;
              }
              var pair = pairs[i];
              if(pair.bodyA === barCat2Body) {
                pair.bodyB.frictionAir = 0.5;
              } else if (pair.bodyB === barCat2Body) {
                pair.bodyA.frictionAir = 0.5;
              }
              var pair = pairs[i];
              if(pair.bodyA === barCat3Body) {
                pair.bodyB.frictionAir = 0.5;
              } else if (pair.bodyB === barCat3Body) {
                pair.bodyA.frictionAir = 0.5;
              }
          }
      });
      Events.on(engine, 'collisionEnd', function(event) {
            var pairs = event.pairs;

            for (var i = 0; i < pairs.length; i++) {
                var pair = pairs[i];
                if(pair.bodyA === barCat0Body) {
                  pair.bodyB.frictionAir = 0.05;
                } else if (pair.bodyB === barCat0Body) {
                  pair.bodyA.frictionAir = 0.05;
                }
            }
            for (var i = 0; i < pairs.length; i++) {
                var pair = pairs[i];
                if(pair.bodyA === barCat1Body) {
                  pair.bodyB.frictionAir = 0.05;
                } else if (pair.bodyB === barCat1Body) {
                  pair.bodyA.frictionAir = 0.05;
                }
            }
            for (var i = 0; i < pairs.length; i++) {
                var pair = pairs[i];
                if(pair.bodyA === barCat2Body) {
                  pair.bodyB.frictionAir = 0.05;
                } else if (pair.bodyB === barCat2Body) {
                  pair.bodyA.frictionAir = 0.05;
                }
            }
            for (var i = 0; i < pairs.length; i++) {
                var pair = pairs[i];
                if(pair.bodyA === barCat3Body) {
                  pair.bodyB.frictionAir = 0.05;
                } else if (pair.bodyB === barCat3Body) {
                  pair.bodyA.frictionAir = 0.05;
                }
            }

        });


    //Objects
    lungsB.push(new LungB(0-wW/60, 0, wW/30, 2*wH));
    lungsB.push(new LungB(wW + wW/60, 0, wW/30, 2*wH));
    barCat0 = new BarCat(wW/2, wH*3.6/4, wW, wH/20);
    barCat0Body = barCat0.body
    World.add(world, barCat0Body);

    // alveols
    // for(i=0; i<10; i ++){
    //   alveols.push(new Alveol(-wW/120 + wW/10*i, wH*3.9/4, wW/150))
    // };
}

function updateTimer() {
  timer += 1;
  o = Math.round(50-(timer/4));
  bloodOxy -= Math.round(bloodOxy*0.2);
  if (Math.round(bloodOxy*0.2) <= 1) {bloodOxy --}
  p = Math.round(timer/6);
  if (bloodOxy <= 0) {
    console.log('you lost');
    clearInterval(myTimer);
    window.location.href = '../html/gameOver.html'
  }
//  console.log(bloodOxy);
//  console.log(bloodCat);
}

function updateHeart() {
  heart ++;
}

//this value represents pollution
var p;
//this value represents oxygen
var o;

function touchMoved() {
  if(isTouched == false){
  for (i=0; i<5; i++) {
    oxys.push(new Oxy(random(wW/2-wW/3,wW/2+wW/3), random(0, -wH/4), wW/60));
  }
  for (i=0; i<1; i++) {
    co2s.push(new Co2(random(wW/2-wW/2.2,wW/2+wW/2.2 ), random(0, -wH/4), wW/20));
  }
  // catarrhs.push(new Catarrh(random(wW/2-wW/10,wW/2+wW/10), random(wH/16, wH*3.8/4), wW/50));
isTouched=true;
setTimeout(resetBreath, 2000)
}
}
var resetBreath = function() {
  isTouched = false
}

function deviceShaken() {
  if (bloodCat>3){
    removeBar1();
  }
  if (bloodCat>9){
    removeBar2();
  }
  if (bloodCat>15){
    removeBar3();
  }
  bloodCat = 0;
  added1 = false;
  added2 = false;
  added3 = false;
}
// adding bars
var addBar1 = function() {
  barCat1 = new BarCat(wW/2, wH*3.301/4, wW, wH/10);
  barCat1Body = barCat1.body
  World.add(world, barCat1Body);
}
var addBar2 = function() {
  barCat2 = new BarCat(wW/2, wH*2.8505/4, wW, wH/8);
  barCat2Body = barCat2.body
  World.add(world, barCat2Body);
}
var addBar3 = function() {
  barCat3 = new BarCat(wW/2, wH*2.275/4, wW, wH/6);
  barCat3Body = barCat3.body
  World.add(world, barCat3Body);
}
// removing bars
var removeBar1 = function() {
  World.remove(world, barCat1Body)
}
var removeBar2 = function() {
  World.remove(world, barCat2Body)
}
var removeBar3 = function() {
  World.remove(world, barCat3Body)
}


// polygons creator
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


function draw() {
  //before Engine update
  //background
  push()
  scale(0.6)
  imageMode(CENTER);
  image(bg, wW/2, wH/2)
  pop()

  // set gravity
  world.gravity.y = g;
  Engine.update(engine);

  //after Engine update
    //function show / isOffScreen
    for(i=0; i < oxys.length; i++){
      oxys[i].show();
      if (oxys[i].isOffScreen()) {
        oxys.splice(i, 1); i--;
        bloodOxy ++;
        }
    }
    for(i=0; i < co2s.length; i++){
      co2s[i].show();
      if (co2s[i].isOffScreen()) {
        co2s.splice(i, 1); i--;
        bloodTox += 1;
        bloodCat += 1;
      }
    }
    //adding Bar1
    if (bloodCat>3 && added1 === false) {
      addBar1();
      added1 = true;
    }
    if (bloodCat>3) {
      barCat1.show();
    }
    //adding Bar2
    if (bloodCat>9 && added2 === false) {
      addBar2();
      added2 = true;
    }
    if (bloodCat>9) {
      barCat2.show();
    }
    //adding Bar3
    if (bloodCat>15 && added3 === false) {
      addBar3();
      added3 = true;
    }
    if (bloodCat>15) {
      barCat3.show();
    }

    bloodOxyPercent = Math.round(bloodOxy/2);
    bloodToxPercent = Math.round(bloodTox/2);

    //Barra stato nord interfaccia
    noStroke();
    fill(200);
    rect(0,0,wW,wH*0.085);
    //text Settings
    fill(20),
    textFont(pressura);
    textAlign(LEFT);

    var lxOX = 2;
    var lxPM = 6;
    var lxHB = 10;
    var lyTX = 0.029;
    var lyPR = 0.07;
    var lyRECT = 0.015;

    //statusBar Header Settings
    textSize(wW/36);
    text('Oxygen', wW*lxOX/12+5, wH*lyTX);
    text('PM', wW*lxPM/12+5, wH*lyTX);
    text('Heartbeat', wW*lxHB/12+5, wH*lyTX);
    push()
    fill(0,0);
    stroke(0);
    strokeWeight(2.5);
    rect(wW*lxOX/12-wW/9, wH*lyRECT, wW/10, wW/10)
    rect(wW*lxPM/12-wW/9, wH*lyRECT, wW/10, wW/10)
    pop()
    push()
    fill(255,0,0);
    polygon(wW*lxPM/12-wW/18-1.8, wH*lyRECT+wH/36, wW/30, 6);
    pop()
    push()
    fill(0,0,255);
    ellipse(wW*lxOX/12-wW/18-1.8, wH*lyRECT+wH/36, wW/30, );
    pop()
    //statusBar Numbers Settings
    textSize(wW/14);
    text(bloodOxyPercent + '%', wW*lxOX/12+5, wH*lyPR);
    text(bloodToxPercent + 'μg', wW*lxPM/12+5, wH*lyPR);
    //heartBeat
    heartRate = bloodOxy*(-0.4473)+154.473;
    heartBeat = sin((heart*PI/6000)*heartRate);
    heartBeatColour = 200+(map(heartBeat, -1, 1, 0, 55));

    stroke(0)
    strokeWeight(2.5);
    fill(heartBeatColour)
    rectMode(CORNER)
    rect(wW*lxHB/12-wW/9, wH*lyRECT, wW/10, wW/10)

    barCat0.show();

    if (bloodOxy > (200-bloodTox)) {bloodOxy = 200-bloodTox};

    var toxLength = (bloodTox * wW) / 200;
    var oxLength =  (bloodOxy * wW) / 200;



    //Barre di stato sud

    //background
    noStroke();
    fill(200);
    rect(0, wH*0.925, wW, wH*0.08);
    //oxyBar
    fill(0, 0, 255);
    rect(0, wH*0.925, oxLength, wH*0.08);
    //toxBar
    fill(220,0,0);
    rect(wW, wH*0.925, -toxLength, wH*0.08);
    //scale
    stroke(50);
    strokeWeight(2.5)
    //horizontal
    line(0, wH*0.925, wW, wH*0.925)
    //vertical
    line(wW*0.001, wH*0.925, wW*0.001, wH*0.95, wH*0.925)
    line(wW*0.1, wH*0.925, wW*0.1, wH*0.95 ,wH*0.925)
    line(wW*0.2, wH*0.925, wW*0.2, wH*0.95 ,wH*0.925)
    line(wW*0.3, wH*0.925, wW*0.3, wH*0.95 ,wH*0.925)
    line(wW*0.4, wH*0.925, wW*0.4, wH*0.95 ,wH*0.925)
    line(wW*0.5, wH*0.925, wW*0.5, wH*0.95 ,wH*0.925)
    line(wW*0.6, wH*0.925, wW*0.6, wH*0.95 ,wH*0.925)
    line(wW*0.7, wH*0.925, wW*0.7, wH*0.95 ,wH*0.925)
    line(wW*0.8, wH*0.925, wW*0.8, wH*0.95 ,wH*0.925)
    line(wW*0.9, wH*0.925, wW*0.9, wH*0.95 ,wH*0.925)
    line(wW*0.999, wH*0.925, wW*0.999, wH*0.95 ,wH*0.925)

    for (i=0; i< oxys.length; i++) {
      if (oxys[i].body.position.y > wH) {
        bloodOxy ++;
        this.counted = true;
      }
    }

}

function windowResized() {
  resizeCanvas(wW, wH);
}
