wr="";
status="";
objects=[];
function preload(){
    wr=loadImage("wr.webp");
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
function draw(){
    image(wr,0,0,640,420);
    if(status!=""){
        for(i=0; i<objects.length; i++){
            document.getElementById("status").innerHTML="Status: Object Detected";
            fill("#FF0000");
            percentage=floor(objects[i].confidence * 100);
            text(objects[i].label+" "+percentage+"%",objects[i].x,objects[i].y+15);
            noFill();
            stroke("#FF0000");
            rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);

        }
    }

 
}
function back(){
    window.location ="index.html";

}