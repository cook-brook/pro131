status="";
br="";
object=[];
function preload(){
    br=loadImage('brr.png');
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
    object=results;
}


function draw() {
    if (status != undefined) {
          image(br, 0, 0, 640, 420);
      for (var i = 0; i < object.length; i++) {
        document.getElementById("status").innerHTML = "Status : Objects Detected";
  
        fill(255, 0, 0);
        percent = floor(object[i].confidence * 100);
        text(object[i].label + " " + percent + "%", object[i].x + 5, object[i].y + 15);
        noFill();
        stroke(255, 0, 0);
        rect(object[i].x, object[i].y, object[i].width, object[i].height);
      }
    }
  }
  
function back(){
    window.location ="index.html";

}