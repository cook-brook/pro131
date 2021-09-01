acc="";
function preload(){
    acc=loadImage("ac.js");
}
function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    screen();
}
function draw(){
    image(acc,0,0,640,420);
    fill("#0000FF");
    noFill();
    stroke("#0000FF")
  
}