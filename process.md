# Doggle

### Functionality & MVP  

With this pet game, the user will be able to:

- [ ] Name the pet and customize the color
  use element.setAttribute for name?
  use easel.js to apply mask over sprite sheet, use predefined color objects
- [ ] Have a menu underneath the main window with interactive actions
  clickable images with divs and shadow w hover changes and click changes to "depress"
- [ ] Interact with the pet using menu action buttons: pet, feed, and wash that cause animation changes
- [ ] Interact with pet using mouse click actions: sit, up, down that cause animation changes

  if you finish everything:
  addEventListener to Easel object
  pull up tingle modal
  allow canvas draw after clicking on center Easel object
  http://www.createjs.com/tutorials/Mouse%20Interaction/
  use invisible grid as spatial summative step
    only allow log of mouseover after mouse leaves square, temporal summative step
    potentially use drag and drop of a pixel and use
    https://github.com/olsn/Collision-Detection-for-EaselJS
    for collision detection of grid squares
- [ ] An About Training modal to let users know they can interact with the mouse as well
  use tingle.js
- [ ] Links to my Github and LinkedIn



**Day 1**: Setup all necessary Node modules.  Create `webpack.config.js` as well as `package.json`.  Write a basic entry file and the bare bones of all 3 main components (menu, room, dog) outlined above. Goals for the day:

- Get a green bundle with `webpack`.
- Render a dog image that is seated, upright, and down using Canvas.

**Day 2**: Dedicate this day to creating the menu and room.

- Complete the `menu.js` and 'room'.js module (constructor, update functions)
- Render a basic room view, a inside view of a cube, to the `Canvas`.

**Day 3**: Create animations for the pet and corresponding menu items and object click triggers.

- Create sit, down, up animations.
- Create feed, pet, wash animations.

**Day 4**: Install the controls for the user to interact with the game.

- Create sit, down, up click triggers on object.
- Create feed, pet, wash, menu triggers on menu.
- Clean up visuals.
