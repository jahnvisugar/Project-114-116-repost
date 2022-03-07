noseX = 0;
noseY = 0;
function preload() {
    img = loadImage("https://i.postimg.cc/MK60pk84/158-1581824-spider-silhouette-black-spider-transparent-background-hd-png-removebg-preview.png");
}

function setup() {
    canvas = createCanvas(300, 300)
    canvas.center()
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x
        noseY = results[0].pose.nose.y
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);

    }
}

function draw() {
    image(video, 0, 0, 300, 300)
    image(img, noseX - 27, noseY, 60, 40);
}

function take_snapshot() {
    save('jahnvi.png')
}


