let player;
let ground;
let ground2;
let ground3;
let img;
var a;
var playery;
let jumpsound;
let img2;
let follower;
let img3;
let img4;
let img5;
let ground5;
var peepee;
var currentlevel;
var b;
let img6;
let ground6;
let button4;
function preload() {
  img = loadImage("4daca85b-2c06-4d53-a399-2a582590480c.png");
  img2 = "pressarrowkeystomove.png";
  img3 = "pressspace.png";
  img4 = "tutorial1.png";
  img5 = "slidin2.png";
  img6 = "arrow.png";
}
console.log("///////");
console.log("loading");
console.log("///////");
function setup() {
  currentlevel = "Tutorial";
  world.gravity.y = 10;
  //createCanvas(1347, 877);
  createCanvas();
  ground = new Sprite([
    [300, 500],
    [600, 500],
    [900, 465],
    [900, 415],
  ]);
  ground3 = new Sprite([
    [100, 450],
    [100, 700],
    [950, 700],
    [1400, 415],
    [1750, 415],
  ]);
  ground5 = new Sprite([
    [100, 450],
    [-500, 450],
  ]);
  ground6 = new Sprite([
    [900, 415],
    [900, 300],
  ]);
  ground7 = new Sprite([
    [100, 200],
    [100, 450],
  ]);
  strokeWeight(50);
  ground4 = new Sprite([
    [1250, 300],
    [1750, 345],
  ]);
  finish1 = new Sprite([
    [-500, 450],
    [-500, 250],
  ]);

  finish1.collider = "static";
  ground6.collider = "static";
  ground4.collider = "static";
  ground3.collider = "static";
  a = 1;
  ground.collider = "Static";
  ground5.collider = "static";
  ground7.collider = "static";
  strokeWeight(4);
  noStroke();
  player = new Sprite();
  player.image = img;
  player.vel.x = 1;
  player.scale = 1;
  player.diameter = 50;
  player.rotationDrag = 15;
  player.x = 575;
  player.y = 300;

  ground2 = new Sprite();
  ground2.y = 625;
  ground2.w = 200;
  ground2.collider = "static";
  ground2.h = 5;
  ground2.x = 600;
  text("player.x.vel = " + Math.round(player.vel.x), 10, 10, 200, 200);
  textSize(20);
  player.vel.y = 10;
  follower = new Sprite();
  follower.img = "IGNORE THIS.png";
  follower.diameter = 1;
  console.log("ignore the error, that's suppost to happen");
  follower.collider = "none";
  buttonprompt = new Sprite();
  buttonprompt.img = "pressarrowkeystomove.png";
  buttonprompt.collider = "none";
  buttonprompt.x = 600;
  buttonprompt.y = 300;

  buttonprompt2 = new Sprite();
  buttonprompt2.img = img3;
  buttonprompt2.collider = "none";
  buttonprompt2.x = 600;
  buttonprompt2.y = 409;
  buttonprompt2.scale = 0.5;

  tutorial = new Sprite();
  tutorial.img = img4;
  tutorial.collider = "none";
  tutorial.y = 600;
  tutorial.x = 330;
  tutorial.scale = 0.3;

  slidin = new Sprite();
  slidin.img = img5;
  slidin.collider = "none";
  slidin.x = 1500;
  slidin.scale = 0.3;
  slidin.y = 300;
  a = 45;
  player.mass = 15;
}
function level1() {
  makebutton();
  print(player.colliding(finish1));
  if ((currentlevel = "Tutorial")) {
    console.log("Loading level 1!");
    //console.log("Todo, finish level 1"); i finished level 1
    ground.remove();
    finish1.remove();
    slidin.remove();
    tutorial.remove();
    buttonprompt.remove();
    ground3.remove();
    ground6.remove();
    ground2.remove();
    buttonprompt2.remove();
    let arrow = new Sprite();
    arrow.img = img6;
    arrow.scale = 0.25;
    arrow.collider = "None";
    arrow.x = -50;
    arrow.y = 450;
    arrow.rotation = 90;
    ground3 = new Sprite([
      [100, 450],
      [100, 700],
      [600, 700],
    ]);
    ground = new Sprite([
      [200, 100],
      [100, 100],
    ]);
    ground5.remove();
    ground5 = new Sprite([
      [-250, 450],
      [100, 100],
    ]);
    ground7 = new Sprite([
      [-250, 450],
      [-250, 250],
    ]);
    ground6 = new Sprite([
      [600, 700],
      [600, 400],
    ]);
    var tempj;
    tempj = 230;
    ground8 = new Sprite([
      [1250, 230],
      [1735, 230 + 30],
    ]);
  }
  ground3.collider = "static";
  ground8.collider = "static";
  ground5.collider = "static";
  ground6.collider = "static";
  ground8.color = "RGB(0,0,255)";
  ground7.collider = "static";
  ground.collider = "static";
  currentlevel = "Level 1";
}

// mabye a coin at 1745 300
// ground = ground
// ground2 = cool jump surface (ground)
// ground3 = ground
// ground4 = cool surface (ground)
// ground5 = ground
// ground6 = barrier
// ground7 = barrier
// ground8 = cool surface (ground)
var buttonexists;

function makebutton() {
  var buttonx = 400;
  var buttony = 675;
  button1 = new Sprite([
    [buttonx + 5, buttony],
    [buttonx, buttony],
    [buttonx, buttony + 20],
  ]);
  button2 = new Sprite([
    [buttonx + 75, buttony + 20],
    [buttonx + 75, buttony],
    [buttonx + 70, buttony],
  ]);
  button3 = new Sprite([
    [buttonx, buttony + 20],
    [buttonx + 75, buttony + 20],
  ]);
  button3.collider = "static";
  button2.collider = "static";
  button4 = new Sprite();
  button4.h = 7;
  button4.w = 70;
  button4.x = buttonx + 33;
  button4.y = buttony + 15;
  button1.color = "RGB(153, 153, 153)";
  button2.color = "RGB(153, 153, 153)";
  button3.color = "RGB(153, 153, 153)";
  button4.color = "RGB(255,0,0)";
  button1.collider = "static";
  button4.collider = "dynamic";
  button4.mass = 1;
  buttonexists = 1;
}

function draw() {
  if (buttonexists == 1) {
    button4.vel.y = -1;
    if (button4.colliding(button3)) {
      console.log("button pressed!");
      console.log("ToDo, made button actualy do somthing");
    }
  }
  follower.moveTowards(player);
  camera.x = follower.x;
  camera.y = follower.y;
  ground.friction = 1;
  //player.bounciness = 0;  dont use, doesn't make the jump code work
  //a++
  if (player.y >= 2000) {
    player.x = 600;
    player.y = 0;
    player.vel.x = 0;
    follower.y = -2200;
    follower.x = 600;
    if (currentlevel == "Level 1") {
      finish1 = new Sprite([
        [-250, 450],
        [-250, 250],
      ]);
      finish1.collider = "static";
      ground7.remove();
      player.x = 300;
    }
  }
  if ((player.x > 1000) & (peepee != true)) {
    ground7.collider = "None";
    ground6.collider = "None";
    peepee = true;
    for (let i = 0; i < 45; i++) {
      a++;
      ground2.y = 600;
    }
  }
  ground2.rotation = a;
  background("rgb(99,99,99)");
  colorMode(RGB, 255);
  ground.color = "RGB(0,255,0)";
  ground2.color = "RGB(0,0,255)";
  ground3.color = "RGB(0,255,0)";
  ground4.color = "RGB(0,0,255)";
  ground5.color = "RGB(255,255,0)";
  ground6.color = "RGB(255,0,0)";
  ground7.color = "RGB(255,0,0)";
  finish1.color = "RGB(136, 38, 255)";

  if (kb.pressing("left")) {
    player.vel.x = player.vel.x - 0.5;
    if (player.vel.x < -9) {
      player.vel.x = player.vel.x + 0.4;
    }
  } else if (kb.pressing("right")) {
    player.vel.x = player.vel.x + 0.5;
    if (player.vel.x > 9) {
      player.vel.x = player.vel.x - 0.4;
    }
  }
  if (kb.pressing("space")) {
    player.moveTowards(mouse);
  }
  if (kb.pressing("z")) {
    if (currentlevel == "Level 1") {
      if (player.colliding(ground8) >= 1) {
        player.vel.y = -5;
      }
    }
    if (player.colliding(ground) >= 1) {
      player.vel.y = -5;
    } else if (player.colliding(ground2) >= 1) {
      player.vel.y = -5;
    } else if (player.colliding(ground3) >= 1) {
      player.vel.y = -5;
    } else if (player.colliding(ground4) >= 1) {
      player.vel.y = -5;
    } else if (player.colliding(ground5) >= 1) {
      player.vel.y = -5;
    }
    if ((player.vel.y < 0.001) & (player.vel.y > 0.01)) {
      player.vel.t = 0.4;
    }
  }

  if (player.colliding(finish1) >= 1) {
    if (currentlevel == "Tutorial") {
      level1();
    }
  }
  player.y = player.y + 0;
  player.x = player.x + 0;
  text("player.x.vel = " + Math.round(player.vel.x), 10, 10, 200, 200);
  text("player.y.vel = " + Math.round(player.vel.y), 10, 60, 200, 200);
  text("player.rotation = " + Math.round(player.rotation), 10, 110, 200, 200);
  text("player.x = " + Math.round(player.x), 10, 160, 200, 200);
  text("player.y = " + Math.round(player.y), 10, 210, 200, 200);
  // text("player.colliding(ground) = " + player.colliding(ground), 10, 260, 200, 200)
  // text("player.colliding(ground2) = " + player.colliding(ground2), 10, 310, 200, 200)
  // text("player.colliding(ground3) = " + player.colliding(ground3), 10, 360, 200, 200)
  // text("player.colliding(ground4) = " + player.colliding(ground4), 10, 410, 200, 200)
  // text("player.colliding(ground5) = " + player.colliding(ground5), 10, 460, 200, 200)
  text("version 4.1", windowWidth - 100, 10, 200, 200);
  text(
    "github.com/TexanDoomGuy/Bad-Red-Ball-2",
    windowWidth - 390,
    60,
    200,
    200
  );
  text("Level: " + currentlevel, windowWidth - 130, 110, 200, 200);
}

// ground = ground
// ground2 = cool surface (ground)
// ground3 = ground
// ground4 = cool surface (ground)
// ground5 = ground
// ground6 = barrier
// ground7 = barrier
