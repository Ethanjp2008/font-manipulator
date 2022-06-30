rightWristx = 0;
leftWristx = 0;
difference = 0;

function setup(){
    canvas = createCanvas(550,450);
    canvas.position(560,100);

    video = createCapture(VIDEO);
    video.size(550,500);
    
    poseNet = ml5.poseNet(video,modelDone);
    poseNet.on('pose',gotPoses);
}

function modelDone(){
    console.log("PoseNet Is Initialized And Loaded");
}

function gotPoses(results){
    
    if(results.length > 0){
        console.log(results);
        rightWristx = results[0].pose.rightWrist.x;
        leftWristx = results[0].pose.leftWrist.x;
        difference = floor(leftWristx-rightWristx);
        console.log("rightWrist_x = "+ rightWristx + " rightWrist_y = "+results[0].pose.rightWrist.y);
        console.log("leftWrist_x = "+ leftWristx + " leftWrist_y = "+results[0].pose.leftWrist.y);
    }
}

function draw(){
    background("#5196e3");
    textSize(difference);
    fill("red");
    text('ETHAN',20,20);
}