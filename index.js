const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

class SnakePart{
    constructor(x,y){
        this.x=x;
        this.y=y;
    }
}
let speed = 7;

let tileCount = 20;
let tileSize = canvas.width/tileCount -2;

let headX = 10;
let headY=10;

let appleX=5;
let appleY=5;
let XVelocity=0;
let YVelocity=0;

//the higher the speed numb, the faster game it is then 

function drawGame(){
    clearScreen();
    drawSnake();
    changeSnakePosition();
    checkAppleCollision();
    drawApple();
    //updates screen 1000/7 times per second thus it allows the user monouver the snake easier before moving to the higher difficulty level 
    setTimeout(drawGame,1000/speed)
}

function clearScreen(){
    ctx.fillStyle='black';
    ctx.fillRect(0,0,canvas.width,canvas.height);
}
function drawApple(){
    ctx.fillStyle='red';
    ctx.fillRect(appleX*tileCount,appleY*tileCount,tileSize,tileSize)
}
function drawSnake(){
    ctx.fillStyle="orange";
    ctx.fillRect(headX*tileCount, headY*tileCount,tileSize,tileSize)
}& appleY===headY
function changeSnakePosition(){
    headX = headX+XVelocity;
    headY = headY+YVelocity
}
function checkAppleCollision(){
    if(appleX===headX && appleY===headY){
        appleX=Math.floor(Math.random()*tileCount);
        appleY=Math.floor(Math.random()*tileCount);
    }
}
document.body.addEventListener('keydown',keyDown);

function keyDown(event){
//up
if(event.keyCode==38){
    YVelocity=-1;
    XVelocity=0;
}
//down
if(event.keyCode==40){
    YVelocity=1;
    XVelocity=0;
}
//left
if(event.keyCode==37){
    YVelocity=0;
    XVelocity=-1;
}
//right
if(event.keyCode==39){
    YVelocity=0;
    XVelocity=1
}
}
drawGame();