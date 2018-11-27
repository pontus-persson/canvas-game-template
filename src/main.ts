import Game from './lib/game';

//
// console.log(Utils);
// Utils.

window.onload = function(e) {
  let game = new Game({
    container: 'content',
  });
  game.init();
  // console.log(window.innerWidth);
  // console.log('asd');
  // utils.resize(e);
};
