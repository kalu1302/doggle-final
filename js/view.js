let canvas = document.getElementById("doggle");

const color = '#99f';

let body = new createjs.Shape();
body.graphics.beginFill(color);

//Preloader and Title

let loadProgressLabel = new createjs.Text("","18px Verdana","black");
loadProgressLabel.lineWidth = 200;
loadProgressLabel.textAlign = "center";
loadProgressLabel.x = canvas.width/2;
loadProgressLabel.y = 50;
stage.addChild(loadProgressLabel);


let loadingBarContainer = new createjs.Container();
const loadingBarHeight = 20;
const loadingBarWidth = 300;
const LoadingBarColor = createjs.Graphics.getRGB(0,0,0);

let loadingBar = new createjs.Shape();
loadingBar.graphics.beginFill(LoadingBarColor)
                   .drawRect(0, 0, 1, loadingBarHeight)
                   .endFill();

let frameLB = new createjs.Shape();
let paddingLB = 3;
frameLB.graphics.setStrokeStyle(1)
                .beginStroke(LoadingBarColor)
                .drawRect(-paddingLB/2,
                          -paddingLB/2,
                          loadingBarWidth+paddingLB,
                          loadingBarHeight+paddingLB);

loadingBarContainer.addChild(loadingBar, frameLB);
loadingBarContainer.x = Math.round(canvas.width/2 - loadingBarWidth/2);
loadingBarContainer.y = 100;
stage.addChild(loadingBarContainer);

let preload = new createjs.LoadQueue(false);
preload.addEventListener("complete", handleComplete);
preload.addEventListener("progress", handleProgress);

function handleProgress() {

    loadingBar.scaleX = preload.progress * loadingBarWidth;

    let loadPercent = Math.round(preload.progress*100);
    loadProgressLabel.text = loadPercent + "% Loaded" ;

    stage.update();

}

function handleComplete() {

 backgroundImage = preload.getResult("background");
 treesImage = preload.getResult("trees");
 groundImage = preload.getResult("ground");

 loadProgressLabel.text = "Loading complete click to start";
 stage.update();

 canvas.addEventListener("click", handleClick);
}

//doggle view Window
const GRASS_Y = 164; //align grass to bottom of view

let gameView = new createjs.Stage(gameView);

const sky = new createjs.Bitmap("images/sky.jpg");
const trees = new createjs.Bitmap("images/trees.jpg");
const grass = new createjs.Bitmap("images/grass.jpg");
      grass.y = GRASS_Y;

gameView.addChild(sky);
