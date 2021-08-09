function setup()
{
    canvas=createCanvas(700,500);
    canvas.position(720,100);
     video=createCapture(VIDEO);
     video.size(500,500);
     video.position(100,100);
     poseNet=(ml5.poseNet(video,modelLoaded));
     poseNet.on('pose',gotPoses);
}
function modelLoaded()
{
    console.log("PoseNet office has been loaded all of your mail will be sent today");//pOTATOATOAOTOATOAPTAOOTAPTOAPTOATAPTOAPTOPAOTPAOTPAPOTATOTACOOOOOOOO
}
function draw()
{
    background(	"#FFEBCD");
}
function gotPoses(results)
{
    if(results.length>0){
        console.log(results);//awiodjaowjidsawdhushauwdusauwhdusiahhwudhsaiushuhiduwahuisihduiwaidhuiuiawuidisagwadsadgsedwsefsefsefadsaoiajiowd
    }
}