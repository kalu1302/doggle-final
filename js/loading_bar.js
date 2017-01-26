let Container = window.createjs.Container;
let Shape = window.createjs.Shape;

class LoadingBar extends Container {

  constructor() {
    super();

    let canvas = document.getElementById("canvas");

    this.width = 300;
    this.height = 20;
    this.padding = 10;
    this.color = "#00BCD4";
    this.frameColor = "#00BCD4";
    this.x = canvas.width/2 - (this.width/2);
    this.y = 100;

    this.render();
  }

  render() {
    const loadingBar = new Shape();
    loadingBar.graphics.beginFill(this.color)
              .drawRect(0, 0, 1, this.height)
              .endFill();
    loadingBar.name = "loadingBar";

    const frame = new Shape();
    frame.graphics.setStrokeStyle(1)
          .beginStroke(this.frameColor)
          .drawRect(-this.padding/2,
                    -this.padding/2,
                    this.width+this.padding,
                    this.height+this.padding)
          .endStroke();

    this.addChild(loadingBar, frame);
  }
}

export default LoadingBar;
