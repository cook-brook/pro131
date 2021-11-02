objectDetector= "";

img = "";
objects = [];
status = "";

function preload(){
  img = loadImage('kitchen.jpg');
}


function setup(){
  canvas=createCanvas(640,420);
  canvas.center();
  objectDetector=ml5.objectDetector('cocossd',modelLoaded);
  document.getElementById("status").innerHTML="Status : Detecting objects";
}

function modelLoaded() {
  console.log("Model Loaded!")
  status = true;
  objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
  if (error) {
    console.log(error);
  }
  console.log(results);
  objects = results;
}


function draw(){
  image(img,0,0,640,420);
  if(status!=""){
      for(i=0; i<object.length; i++){
          document.getElementById("status").innerHTML="Status: Object Detected";
          fill("#FF0000");
          percentage=floor(object[i].confidence*100);
          text(object[i].label+" "+percentage+"%",object[i].x-15,object[i].y);
          noFill();
          stroke("#FF0000");
          rect(object[i].x,object[i].y,object[i].width,object[i].height);
      }
  }



}
function back(){
    window.location ="index.html";

}