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
let arrow;
var b;
let img6;
let ground6;
let button4;
var deadlythingexists = 0;
var timerValue = 0;
var leveldone = 0;
var buttonexists = 0;
var intermissionSprExists = 0;
var par;
var deadlythingmovingup = 0;
var buttonpressed = 0;
let deadlything;
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
  easteregg = new Sprite([
    [-500, 1000],
    [-600, 1000],
    [-600, 800],
    [-200, 800],
    [-400, 800],
    [-400, 1000],
  ]);
  easteregg2 = new Sprite([
    [-600, 1100],
    [-300, 1100],
  ]);

  easteregg.x = -2000;
  easteregg2.x = -2000;
  easteregg2.collider = "static";
  easteregg.collider = "static";
  par = 6;
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

  setInterval(timeIt, 1000);

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
  timerValue = 0;
  par = 5;
  if ((currentlevel = "Tutorial")) {
    console.log("Loading level 1!");
    player.y = 600;
    player.x = 300;
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
    arrow = new Sprite();
    arrow.img = img6;
    arrow.scale = 0.25;
    arrow.collider = "None";
    arrow.x = -50;
    arrow.y = 450;
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
    finish1 = new Sprite([
      [-250, 450],
      [-250, 250],
    ]);
    ground6 = new Sprite([
      [600, 700],
      [600, 400],
    ]);
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
  finish1.collider = "static";
  ground.collider = "static";
  currentlevel = "Level1";
}
function level2() {
  timerValue = 0;
  par = 6;
  makebutton();
  console.log("Loading Level2!");
  if (currentlevel == "Level1") {
    currentlevel = "Level2";
    arrow.remove();
    ground3.remove();
    ground.remove();
    ground2.remove();
    ground5.remove();
    //ground6.remove();
    ground8.remove();
    finish1.remove();
    ground4.remove();
    ground7.remove();
    ground3 = new Sprite([
      [100, 700],
      [600, 700],
    ]);
    ground4 = new Sprite([
      [0, 500],
      [350, 600],
    ]);
    ground9 = new Sprite([
      [350, 500],
      [350, 600],
    ]);
    ground9.collider = "static";
    ground7.collider = "static";
    ground3.collider = "static";
    ground4.collider = "static";
    ground9.color = "RGB(255,0,0)";
  }
}

function level3() {
  timerValue = 0;
  console.log("Loading level3");
  if (currentlevel == "Level2") {
    deadlything = new Sprite();
    deadlything.w = 5;
    deadlything.h = 100;
    deadlything.color = "RGB(255,140,0)";
    deadlythingexists = 1;
    buttonexists = 0;
    deadlything.y = 530;
    deadlything.collider = "static";
    deadlything.x = 550;
    button1.remove();
    button2.remove();
    button3.remove();
    button4.remove();
    ground4.remove();
    ground6.remove();
    ground7.remove();
    ground8.remove();
    ground9.remove();
    ground4 = new Sprite([
      [700, 600],
      [700, 200],
    ]);
    ground = new Sprite([
      [0, 200],
      [600, 200],
    ]);
    finish1 = new Sprite([
      [0, 200],
      [0, 100],
    ]);
    ground.collider = "static";
    finish1.collider = "static";
    ground4.collider = "static";
    currentlevel = "Level3";
  }
}
/* mabye a coin at 1745 300
ground = ground
ground2 = cool jump surface (ground)
ground3 = ground
ground4 = cool surface (ground)
ground5 = ground
ground6 = barrier
ground7 = barrier
ground8 = cool surface (ground)
 ground9 = barrier */

function intermission() {
  leveldone = 1;
  player.x = 300;
  player.y = 0;
  if (leveldone == 1) {
    setTimeout(function () {
      if (currentlevel == "Tutorial") {
        level1();
      } else if (currentlevel == "Level1") {
        level2();
      } else if (currentlevel == "Level2") {
        level3();
      }
      player.y = 600;
      player.x = 300;
      leveldone = 0;
    }, 3000);
  }
}

function makebutton() {
  if (buttonexists == 0) {
    console.log("button made");
    var buttonx = 100;
    var buttony = 450;
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
}

function summonFinish() {
  // ground4 = new Sprite([
  //   [0, 500],
  //   [350, 600],
  // ]);
  finish1 = new Sprite([
    [-100, 450],
    [-100, 550],
  ]);
  ground7 = new Sprite([
    [0, 500],
    [0, 400],
  ]);
  ground9.remove();
  ground7.collider = "static";
  finish1.collider = "static";
}

function draw() {
  if (deadlythingexists == 1) {
    deadlything.y = cos(frameCount * 2.2) * 100 + 500;
  }
  if (buttonexists == 1) {
    if (buttonpressed == 1) {
      button4.vel.y = 0;
    } else if (buttonpressed == 0) {
      button4.vel.y = -1;
    }
    if (
      button4.colliding(button3) &
      (player.colliding(button4) >= 0) &
      (buttonpressed == 0)
    ) {
      buttonpressed = 1;
      console.log("button pressed!");
      summonFinish();
    } else if (button4.colliding(button3) & (player.colliding(button4) == 1)) {
      //buttonpressed = 0;
      console.log("button unpressed!");
    }
  }
  follower.moveTowards(player);
  if (intermissionSprExists == 0) {
    camera.x = follower.x;
    camera.y = follower.y;
  }
  ground.friction = 1;
  //player.bounciness = 0;  dont use, doesn't make the jump code work
  //a++
  if (player.y >= 2000) {
    player.x = 300;
    player.y = 300;
    player.vel.x = 0;
    follower.y = -2200;
    follower.x = 600;
    timerValue = 0;
  }
  if ((player.x > 1000) & (peepee != true)) {
    ground7.remove();
    ground6.remove();
    peepee = true;
    a = 90;
    ground2.y = 600;
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
    intermission();
  }
  if (deadlythingexists == 1) {
    if (player.colliding(deadlything) >= 1) {
      player.x = 300;
      player.y = 600;
    }
  }
  player.y = player.y + 0;
  player.x = player.x + 0;
  text("player.x.vel = " + Math.round(player.vel.x), 10, 10, 200, 200);
  text("player.y.vel = " + Math.round(player.vel.y), 10, 60, 200, 200);
  text("player.rotation = " + Math.round(player.rotation), 10, 110, 200, 200);
  text("player.x = " + Math.round(player.x), 10, 160, 200, 200);
  text("player.y = " + Math.round(player.y), 10, 210, 200, 200);
  text("Time: " + timerValue, windowWidth / 2, 20);
  text("buttonpressed = " + buttonpressed, 10, 260, 200, 200);
  // text("player.colliding(ground2) = " + player.colliding(ground2), 10, 310, 200, 200)
  // text("player.colliding(ground3) = " + player.colliding(ground3), 10, 360, 200, 200)
  // text("player.colliding(ground4) = " + player.colliding(ground4), 10, 410, 200, 200)
  // text("player.colliding(ground5) = " + player.colliding(ground5), 10, 460, 200, 200)
  text("version beta 6.1", windowWidth - 150, 10, 200, 200);
  if (leveldone == 1) {
    let c = color(0, 0, 0);
    fill(c);
    noStroke();
    square(-2000, -100, 50);
    camera.y = -2000;
    camera.x = -100;
    clear();
    text(
      "Your time was " + timerValue + " secconds",
      windowWidth / 2,
      windowHeight / 2 + 70
    );
    text("Par: " + par, windowWidth / 2, windowHeight / 2 + 140);
    text(currentlevel + " completed!", windowWidth / 2, windowHeight / 2);
  }
  text(
    "github.com/TexanDoomGuy/Bad-Red-Ball-2",
    windowWidth - 390,
    60,
    200,
    200
  );
  text("Level: " + currentlevel, windowWidth - 130, 110, 200, 200);
}

function timeIt() {
  if ((timerValue >= 0) & (leveldone == 0)) {
    timerValue++;
  }
}

function keyPressed() {
  if (keyCode == 81) {
    if (currentlevel == "Tutorial") {
      level1();
    } else if (currentlevel == "Level1") {
      level2();
    } else if (currentlevel == "Level2") {
      level3();
    }
  }
}
// ground = ground
// ground2 = cool surface (ground)
// ground3 = ground
// ground4 = cool surface (ground)
// ground5 = ground
// ground6 = barrier
// ground7 = barrier
