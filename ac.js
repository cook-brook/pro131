status="";
acc="";
object=[];
function preload(){
    acc=loadImage('ac.jpg');
}
function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status : Detecting objects";
}
function modelLoaded(){
    console.log("model loaded!!");
    status=true;
    objectDetector.detect(acc,gotResults);
}
function gotResults(error,results){
    if(error){
        console.log(error);
    }
    console.log(results);
    object=results;
}


function draw(){
    
    if(status!=""){
        image(acc,0,0,640,420);
        for(var i=0; i<object.length; i++){
            document.getElementById("status").innerHTML="Status: Object Detected";
            fill("#FF0000");
            percentage=floor(object[i].confidence * 100);
            text(object[i].label+" "+percentage+"%",object[i].x+5,object[i].y+15);
            noFill();
            stroke("#FF0000");
            rect(object[i].x,object[i].y,object[i].width,object[i].height);

        }
    }
}
function back(){
    window.location ="index.html";

}
