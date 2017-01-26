// import Room from './room';
import { LoadingPage } from './loading_page';
import { GamePage } from './game_page';
import Room from './room';

//TODO add all preload needs here
const manifest = [{src: "images/testing.jpg", id:"testing"},
                  {src: "images/wash.png", id:"wash"},
                  {src: "images/pet.png", id:"pet"},
                  {src: "images/feed.png", id:"feed"},
                  {src: "images/submit.png", id:"submit"},];

document.addEventListener('DOMContentLoaded', function () {

  let createjs = window.createjs;
  let canvas = document.getElementById("canvas");
  let stage = new createjs.Stage("canvas");

  //resize window with screen
  window.addEventListener('resize', resize, false);
  resize();
  function resize() {
    //TODO define minimum width
    stage.canvas.width = window.innerWidth;
    stage.update();
  }

  LoadingPage(canvas, stage, manifest, GamePage.bind(null, canvas, stage));
  // GamePage.bind(null,canvas,stage)();

});
