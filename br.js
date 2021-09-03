br="";
status="";
function preload(){
    br=loadImage("br.jpg");
}

function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    canvas.position(470,220);
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status: Object Detecting";
}
function modelLoaded(){
    console.log("model loaded!!");
    status=true;
    objectDetector.detect(br,gotResults);
}
function gotResults(error,results){
    if(error){
        console.log(error);
    }
    console.log(results);
}
function draw(){
    image(br,0,0,640,420);
    fill("#0000FF");

    noFill();
    stroke("#0000FF")
 
}
function back(){
    window.location ="index.html";

}