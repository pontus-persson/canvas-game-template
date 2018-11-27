import Utils from './utils';
import Render from './render';

class Game {
  // Helper objects
  utils: Utils;
  render: Render;

  constructor(params) {
    this.utils = new Utils();
    this.render = new Render(params.container);
  }

  init() {
    console.log('init game');

    this.render.init();


  }

}

export default Game;