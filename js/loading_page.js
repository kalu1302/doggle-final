import LoadingBar from './loading_bar';
let createjs = window.createjs;

export const LoadingPage = (canvas, stage, manifest, nextpage) => {

  let loadProgressLabel = new createjs.Text("","18px Roboto","#00BCD4");
  loadProgressLabel.lineWidth = 200;
  loadProgressLabel.textAlign = "center";
  loadProgressLabel.x = canvas.width/2;
  loadProgressLabel.y = 50;

  let loadingBar = new LoadingBar();

  stage.addChild(loadProgressLabel, loadingBar);

  //change back to false for production
  let preload = new createjs.LoadQueue(false);
  preload.addEventListener("complete", handleComplete);
  preload.addEventListener("progress", handleProgress);
  preload.loadManifest(manifest);

  //TODO remove, testing
  window.preload = preload;


  function handleProgress() {

      let bar = loadingBar.getChildByName("loadingBar");
      bar.scaleX = preload.progress * loadingBar.width;
      let loadPercent = Math.round(preload.progress*100);
      loadProgressLabel.text = loadPercent + "% Loaded" ;

      stage.update();

  }

  function handleComplete() {

    //TODO load manifest items

   loadProgressLabel.text = "START GAME";
   stage.update();

   canvas.addEventListener("click", handleClick);
  }

  function handleClick() {
    stage.removeAllChildren();
    stage.update();
    nextpage();
    $("#canvas").remove();
  }
};
