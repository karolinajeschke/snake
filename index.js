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
const snakeParts = [];
let tailLength=2;

let appleX=5;
let appleY=5;

let XVelocity=0;
let YVelocity=0;

//the higher the speed numb, the faster game it is then 
//game loop
function drawGame(){
    changeSnakePosition();
    clearScreen();
    checkAppleCollision();
    drawSnake();
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

    ctx.fillStyle='green';
    ctx.fillRect()
}
function drawSnake(){

    ctx.fillStyle="green";
    for(let i =0; i < snakeParts;i++){
       let part = snakeParts[i];
       ctx.fillRect(part.x *tileCount,part.y* tileCount,tileSize,tileSize) 
    }
    snakeParts.push(new SnakePart(headX,headY));//put the itema at the end of the snake
        if(snakeParts.length > tailLength){
            snakeParts.shift(); //remove the furthers item from 
        }
    ctx.fillStyle="orange";
    ctx.fillRect(headX*tileCount, headY*tileCount,tileSize,tileSize);

}
function changeSnakePosition(){
    headX = headX+XVelocity;
    headY = headY+YVelocity
}
function checkAppleCollision(){
    if(appleX===headX && appleY===headY){
        appleX=Math.floor(Math.random()*tileCount);
        appleY=Math.floor(Math.random()*tileCount);
        tailLength++
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