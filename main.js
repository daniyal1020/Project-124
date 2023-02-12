noseX = 0;
noseY = 0;
difference = 0;
function preload(){
classifier = ml5.imageClassifier('poseNet');
}
function setup(){
canvas = createCanvas(550, 550);
canvas.position(790, 99);
video = createCapture(VIDEO);
video.size(550, 500);
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}
function gotPoses(result){
    if(result.length > 0){
    }
}        