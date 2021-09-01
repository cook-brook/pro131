Kitchen="";
function preload(){
    Kitchen=loadImage("kitchen.jpeg");
    setScreen();
}
function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
}
function draw(){
    image(Kitchen,0,0,640,420);
    fill("#0000FF");

    noFill();
    stroke("#0000FF")
   
}