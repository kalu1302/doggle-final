let createjs = window.createjs;
// import Input from './input';
import Room from './room';
// import ColorPicker from './color_picker';

export const GamePage = (canvas, stage) => {

  // const name = new Input("Name:");
  // const color = new ColorPicker("Pet Color:");

  // //TODO add image for start game with click handle
  // const submit = new createjs.Bitmap("./images/submit.png");
  // submit.on("click", () => {
  //   // startRoom(name.value, color.value);
  //     startRoom("Doggle", "red");
  // });
    stage.removeAllChildren();
    stage.update();
    const room = new Room();
    room.createMenu();

  // stage.append(name, color, submit);
  // stage.addChild(submit);
};
