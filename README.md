![Titolo](/imgs/titolone_home.png)


# Just Breathe #

## Project idea ##
Just Breathe is a university project, developed using p5.js library, for the course Creative Coding, attended at Politecnico di Milano.<br/>
The aim of this interactive app is to make people experience the effects of pollution on our body to become aware of its risks, as we believe the too often go unnoticed in our everyday life.<br/>
For our experience we selected the main effect pollution has on our body: fatigue.<br/>

## Interactions ##
Our project is built to work on a mobile device in portrait orientation. The user can interact with the sketch by swiping vertically and shaking it.</br>
![GIF1](/imgs/smartphone_play.gif)
The vertical swipe is an interaction that simulates the act of breathing. The goal is to breathe enough oxygen to stay alive while pollution gradually makes it harder for us to do so.<br/>
![GIF2](/imgs/smartphone_go-2.gif)
The shake is used to rappresent the act of coughing.</br>
The continuous swipe required to stay alive lets you experience muscular fatigue while you play, making the interaction more authentic.</br>


## Graphic style ##
![Logo](/imgs/loghetto.png)</br>
We decided to use a minimalistic schemathic representation for our webapp. We had to find a graphic style that allowed the code to run smoothly on mobile devices, so we used a style that recalls that of formal documentation in the layout and a phisical laboratory in the colour scheme. This style alloewd us to run our application running as few grpahic elements as possible<br/>
<br/>
![Logo](/imgs/info.png)</br>
An other objective wa to keep the user always awear of what was going on in his lungs.<br/>
So we implemented to bars that keep track of the Oxygen and Pollution that you have been breathing.<br/>

<br/>
![GIF3](/imgs/smartphone_info.gif)

## Used libraries ##
To develop our project we used the following libraries:

* p5.js
* matter.js
* jquery.js

##Problems and Solutions##
The first problem to face was that of realistic physics, which was solved mainly trough the use of matter.js, wich helped us handle elements such as collisions and fluid viscosity.
Matter.js was realy useful but hard to learn. It presented us several issues like not reading most of the arrays and having difficulties at handlig external variables that we used to create the differnt particles.</br>
Our solution was to simplify our web app and reduce the nuber of particles and hard-code most of the Events we used.</br>


``` javascript
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
function deviceShaken() {
removeBar1();
removeBar2();
removeBar3();
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
```

Another difficult aspect was defining the degree of autenthicity of the whole experience, which involved a brief study of our body parameters with and without pollution.


## Project developers ##
Nicolò Barbieri<br/>
Luca Draisci<br/>
Francesco Longoni
