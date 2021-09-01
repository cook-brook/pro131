br="";
function preload(){
    br=loadImage("br.jpg");
}
function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
}
function draw(){
    image(br,0,0,640,420);
    fill("#0000FF");
    noFill();
    stroke("#0000FF")
}