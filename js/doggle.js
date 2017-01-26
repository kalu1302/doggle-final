const createjs = window.createjs;

class Doggle {
  constructor() {
  this.name = "Doggle";
  this.color = "#00BCD4";
  this.x = 0;
  this.y = 0;
  this.z = 0;
  this.happy = 0;
  //available poses: sit, up, down
  this.pose = "sit";
  this.stage = new createjs.Stage("pet");
  this.image = new createjs.Container();
  }

  draw() {
  }

  sit() {
    if (this.pose === "up") {
      //trigger easeljs animation up -> sit
      this.pose = "sit";
    } else if (this.pose === "down") {
      //trigger easeljs down -> sit
      this.pose = "sit";
    }
  }

  up() {
    if (this.pose !== "up") {
    //animation is down -> sit -> up
      this.sit();
      //easeljs sit -> up animation
      this.pose = "up";
    }
  }

  down() {
    if (this.pose !== "down") {
    //animation is up -> sit -> down
      this.sit();
      //easeljs sit -> up animation
      this.pose = "down";
    }
  }

  receive() {
    //animate eyes and ears
  }
}

export default Doggle;
