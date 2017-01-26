# Doggle

## Doggle: An Interactive Pet Game

### Background

This game is inspired by Nintendog, Tamagotchi, and similar pet simulations. The player will be able to interact with a minimalist virtual pet, feeding it, petting it, and asking it to perform tricks.

### Functionality & MVP  

With this pet game, the user will be able to:

- [ ] Name the pet and customize the color
- [ ] Have a menu underneath the main window with interactive actions
- [ ] Interact with the pet using menu action buttons: pet, feed, and wash that cause animation changes
- [ ] Interact with pet using mouse click actions: sit, up, down that cause animation changes

In addition, this project will include:

- [ ] An About Training modal to let users know they can interact with the mouse as well
- [ ] Links to my Github and LinkedIn
- [ ] A production Readme

### Wireframes

This app will consist of a single screen with game window representing the room, a game object representing the pet, game controls, and nav links to the Github, my LinkedIn, and the setting modal with About Training information.  Game controls will include clickable action buttons on the bottom menu as well as mouse click events that interact with the pet and change the pet animation.

![Wireframe](wireframe.png)

### Architecture and Technologies

This project will be implemented with the following technologies:

- Vanilla JavaScript and `jquery` for overall structure and game logic.
- Canvas for DOM manipulation and rendering.
- Webpack to bundle and serve up the various scripts.

In addition to the webpack entry file, there will be other files involved in this project:

- menu and menu button objects.
- a room object that interprets actions and passes them to the dog object.
- a dog object that triggers different animations upon action.

### Implementation Timeline

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
