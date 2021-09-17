status="";
br="";
object=[];
function preload(){
    br=loadImage('br.jpg');
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
    objectDetector.detect(br,gotResults);
}
function gotResults(error,results){
    if(error){
        console.log(error);
    }
    console.log(results);
    object=results;
}


function draw(){
    image(br,0,0,640,420);
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