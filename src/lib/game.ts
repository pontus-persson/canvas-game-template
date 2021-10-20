import Utils from './utils';
import Render from './render';

class Game {

  // Submodules
  utils: Utils;
  render: Render;

  constructor(params: any) {
    this.utils = new Utils();
    this.render = new Render(params.container);
  }

  init() {
    console.log('init game');

    this.render.init(); 


  }

}

export default Game;