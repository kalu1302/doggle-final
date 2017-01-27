const THREE = window.THREE;
const createjs = window.createjs;
import Doggle from './doggle';
import tingle from './tingle';



const Y_MENU = 100;
const X_MENU_MARGIN = 50;

class Room {
  constructor() {
    this.doggle = new Doggle();
    this.modal = new tingle.modal({
      footer: true,
      stickyFooter: false,
      closeLabel: "Close",
    });
    // this.canvas = document.getElementById("menu");
    // this.stage = new createjs.Stage("menu");
    this.clickColor = this.clickColor.bind(this);
    this.clickModal = this.clickModal.bind(this);
  }

  createMenu() {
    // const x_first = x_mid - (X_MENU_MARGIN + washButton.getBounds().width);
    // const x_mid = Math.floor(this.canvas.width / 2) - (washButton.getBounds().width / 2);
    // const x_last = x_mid + (X_MENU_MARGIN + washButton.getBounds().width);
    //
    // // const wash = new Image();
    // // wash.src = "./images/wash.jpg";
    // let washButton = new createjs.Shape;
    // // var image = new Image();
    // // image.src = source;
    //
    // // washButton.graphics.beginBitmapFill(wash, "no-repeat").drawCircle(0,0,25);
    // washButton.graphics.drawCircle(0,0,25);
    // washButton.x = x_first;
    // washButton.y = Y_MENU;
    // washButton.on("click", this.clickWash());
    //
    // // const feed = new createjs.Bitmap("../images/feed.png");
    // // feed.cursor = "pointer";
    // // feed.y = Y_MENU;
    // // feed.x = x_mid;
    // // feed.on("click", this.clickFeed());
    //
    // // const pet = new createjs.Bitmap("../images/pet.png");
    // // pet.cursor = "pointer";
    // // pet.y = Y_MENU;
    // // pet.x = x_last;
    // // pet.on("click", this.clickPet());
    // //set clickhandle
    // // this.stage.addChildren(wash, feed, pet);
    // this.stage.addChildren(wash);
    let $makeshiftLabel = $("<text>Name Your Doggle:</text>");

    let $namingDoggle = $(
      '<form action="#"><div class="mdl-textfield mdl-js-textfield"><input class="mdl-textfield__input" value="Doggle" type="text" id="name"><label class="mdl-textfield__label" for="name"></label></div></form>'
    );

    let pinkButton = document.createElement("BUTTON");
    let blueButton = document.createElement("BUTTON");
    let tanButton = document.createElement("BUTTON");
    pinkButton.addEventListener("click", this.clickColor);
    blueButton.addEventListener("click", this.clickColor);
    tanButton.addEventListener("click", this.clickColor);
    pinkButton.setAttribute("id", "pink");
    blueButton.setAttribute("id", "blue");
    tanButton.setAttribute("id", "tan");

    let modalButton = document.createElement("BUTTON");
    modalButton.addEventListener("click", this.clickModal);
    modalButton.setAttribute("id", "modal");
    modalButton.innerHTML = "Help";

    $("#nameDoggle").append($makeshiftLabel, $namingDoggle, pinkButton, blueButton, tanButton, modalButton);

    this.modal.setContent('<h3>Welcome to Doggle!<h3><h5>Name your doggle anything you would like.</h5><h5>Customize your doggle color by clicking the colors.</h5><h5>Click on the doggle to pull up the action menu.</h5>');
    this.modal.addFooterBtn('Got it!', 'tingle-btn tingle-btn--primary', () => {
      this.modal.close();
    });

    this.modal.open();
  }

  clickModal(e) {
    this.modal.open();
  }

  clickColor(e) {
    $("button").each((index, el) => (el.setAttribute("class", "")));
    e.target.setAttribute("class", "selected");
  }

  clickWash() {


  }
  clickFeed() {


  }
  clickPet() {


  }


  render3D() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

    const renderer = new THREE.WebGLRenderer({alpha: true});
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.getElementById("render3D").appendChild( renderer.domElement );

    const geometry = new THREE.DodecahedronGeometry( 10, 0);
    const doggleShape = THREE.SceneUtils.createMultiMaterialObject( geometry, [
      new THREE.MeshBasicMaterial( { color: 0x66CCFF} ),
      new THREE.MeshBasicMaterial( { color: 0xCCFFFF, wireframe: true} )
    ]);
    scene.add( doggleShape );



    camera.position.z = 60;

    function render() {

      requestAnimationFrame( render );

        doggleShape.rotation.x += 0.01;
        doggleShape.rotation.y += 0.01;

      renderer.render( scene, camera );
    }

    render();
  }
}

export default Room;
