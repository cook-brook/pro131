wr="";
status="";
objects=[];
function preload(){
    wr=loadImage("desk.png");
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
    objectDetector.detect(wr,gotResults);
}
function gotResults(error,results){
    if(error){
        console.log(error);
    }
    console.log(results);
    objects=results;
}
function draw() {
    if (status != undefined) {
          image(wr, 0, 0, 640, 420);
      for (var i = 0; i < object.length; i++) {
        document.getElementById("status").innerHTML = "Status : Objects Detected";
  
        fill(255, 0, 0);
        percent = floor(objects[i].confidence * 100);
        text(objects[i].label + " " + percent + "%", objects[i].x + 5, objects[i].y + 15);
        noFill();
        stroke(255, 0, 0);
        rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
      }
    }
  }
  
function back(){
    window.location ="index.html";

}